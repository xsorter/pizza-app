import {Component} from "../default/app"

class Register extends Component {
    constructor(props) {
      super(props);
      this.host = document.createElement('div');
    }
  
    render() {
      return `
        <div class="center-flex">
          <div class="register">
            <form>
              <input type="text" placeholder="Enter your name">
              <input type="email" placeholder="Enter your email">
              <input type="text" placeholder="Enter your password">
              <button class="button">Register</button>
            </form>
            <a class="link" href="#/login">login</a>
          </div>
        </div>
      `;
    }
  }
  
  export default Register;
  