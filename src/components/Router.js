import {Component} from "../default/app";
import { isUrlParam, isEqualPaths, extractUrlParams } from '../utils/tools';
const ANY_PATH = '*';

class Router extends Component {
  constructor(routes) {
    super();

    this.state = {
      activeRoute: null,
      activeComponent: null,
      routes,
    };

    this.host = document.createElement('div');

    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);

    window.addEventListener('hashchange', () =>
      this.handleUrlChange(this.path)
    );

    this.handleUrlChange(this.path);
    console.log('test');

  }

  get path(){
    return window.location.hash.slice(1)
  }

  handleUrlChange(url){
    const { routes, activeRoute } = this.state;
    let nextRoute = routes.find(({ href }) => isEqualPaths(href, url));

    if (!nextRoute) {
      nextRoute = routes.find(({ href }) => href === ANY_PATH); //looking for any route
    }

    if (nextRoute && activeRoute !== nextRoute) {
      if (!!nextRoute.redirectTo) {
        return this.handleRedirect(nextRoute.redirectTo);
      }

      if (!!nextRoute.onEnter) {
        return this.handleOnEnter(nextRoute, url);
      }

      this.applyRoute(nextRoute, url);
    }

  }

  handleRedirect(url) {
    window.location.hash = url;
  }

  handleOnEnter(nextRoute, url) {
    const { href } = nextRoute;
    const params = extractUrlParams(href, url);
    nextRoute.onEnter(params, this.handleRedirect, nextRoute);
  }

  applyRoute(route, url) {
    const { href, component: Component } = route;
    const { activeComponent } = this.state;

    const componentInstance = new Component({
      params: extractUrlParams(href, this.path),
      replace: this.handleRedirect,
    });

    if (activeComponent) {
      activeComponent.unmount();
    }

    this.updateState({
      activeRoute: route,
      activeComponent: componentInstance,
    });
  }

  render() {
    return this.state.activeComponent.update();
  }
}

export default Router;
