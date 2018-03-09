import {Component} from "../default/app"


class Login extends Component {
    constructor() {
      super();
      this.host = document.createElement('div');
    }
  
    render() {
      return `
        <div class="center-flex">
          <div class="login">
            <form>
              <input type="text" placeholder="Enter your name">
              <input type="text" placeholder="Enter your password">
              <button class="button">login</button>
            </form>
            <a class="link" href="#/register">register</a>
          </div>
        </div>
      `;
    }
  }
  
  export default Login;
  