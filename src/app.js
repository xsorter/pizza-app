import "./assets/sass/main.sass";
import clearChildren from "./utils/tools"
import Router from "./components/Router";
import routes from "./utils/routes";

let router = new Router(routes);
const root = document.getElementById('root');
root.appendChild(router.host);

