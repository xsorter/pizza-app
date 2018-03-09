import { Component } from "../default/app";

class Footer extends Component {
  constructor() {
    super();

    this.host = document.createElement("footer");
  }

  render() {
    return `
            <p>
                2017 
                <span>•</span> 
                icons taken from flaticon.com, animated svg taken from amcharts.com (IPL), 
                weather data brign by weatherbit.io API 
                <span>•</span> 
                made by Alex Nelin
            </p>
        `;
  }
}

export default Footer;
