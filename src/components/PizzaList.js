import {Component} from "../default/app";

import logo from "../assets/img/pizza_logo.png";
import rucola from "../assets/img/rucola.png";
import pizzaImg1 from "../assets/img/1.png";
import pizzaImg2 from "../assets/img/2.png";
import pizzaImg3 from "../assets/img/3.png";
import pizzaImg4 from "../assets/img/4.png";
import pizzaImg5 from "../assets/img/5.png";
import pizzaImg6 from "../assets/img/6.png";
import pizzaImg7 from "../assets/img/7.png";
import pizzaImg8 from "../assets/img/8.png";
import pizzaImg9 from "../assets/img/9.png";



class PizzaList extends Component {
    constructor() {
      super();
      this.host = document.createElement('div');
    }
  
    render() {
      return `
        <header>
            <div class="container">
                <div class="time">
                    <span>
                        <i class="far fa-clock"></i>
                        <time datetime="00:00:00" id="time">00:00:00</time>
                    </span>
                </div>
                <div class="logo">
                    <a href="#">
                        <img src="${logo}" alt="pizza logo">
                    </a>
                </div>
                <div class="login">
                    <i class="fas fa-user"></i>
                    <a href="#">login/signup</a>
                </div>
            </div>
        </header>

        <main>
            <div class="buttons">
                <button class="button" type="button">
                    <i class="fas fa-plus"></i>
                    Add new pizza
                </button>
            </div>

            <div class="wrapper">
                <div class="pizza">
                    <img class="absolute" src="${rucola}" alt="rucola image">
                    <div class="pizza__image">
                        <img src="${pizzaImg1}" alt="pizza 1 image">
                    </div>
                    <div class="pizza__text">
                        <div>
                            <span>XX:XX:XX</span>
                            <span>#1</span>
                        </div> 
                        <div>
                            <span><b>ETA:</b> <time datetime="01:00">3 min</time></span>
                            <span><b>$10.99</b></span>
                        </div>      
                    </div>
                </div>
                <div class="pizza">
                    <img class="absolute" src="${rucola}" alt="rucola image">
                    <div class="pizza__image">
                        <img src="${pizzaImg2}" alt="pizza 2 image">
                    </div>
                    <div class="pizza__text">
                        <div>
                            <span>XX:XX:XX</span>
                            <span>#2</span>
                        </div> 
                        <div>
                            <span><b>ETA:</b> <time datetime="01:00">1 min</time></span>
                            <span><b>$14.99</b></span>
                        </div>      
                    </div>
                </div>
                <div class="pizza">
                    <img class="absolute" src="${rucola}" alt="rucola image">    
                    <div class="pizza__image">
                        <img src="${pizzaImg3}" alt="pizza 3 image">
                    </div>
                    <div class="pizza__text">
                        <div>
                            <span>XX:XX:XX</span>
                            <span>#3</span>
                        </div> 
                        <div>
                            <span><b>ETA:</b> <time datetime="01:00">5 min</time></span>
                            <span><b>$10.99</b></span>
                        </div>      
                    </div>
                </div>
                
                <div class="pizza">
                    <img class="absolute" src="${rucola}" alt="rucola image">
                    <div class="pizza__image">
                        <img src="${pizzaImg4}" alt="pizza 4 image">
                    </div>
                    <div class="pizza__text">
                        <div>
                            <span>XX:XX:XX</span>
                            <span>#4</span>
                        </div> 
                        <div>
                            <span><b>ETA:</b> <time datetime="01:00">10 min</time></span>
                            <span><b>$8.99</b></span>
                        </div>      
                    </div>
                </div>
                <div class="pizza">
                    <img class="absolute" src="${rucola}" alt="rucola image">
                    <div class="pizza__image">
                        <img src="${pizzaImg5}" alt="pizza 5 image">
                    </div>
                    <div class="pizza__text">
                        <div>
                            <span>XX:XX:XX</span>
                            <span>#5</span>
                        </div> 
                        <div>
                            <span><b>ETA:</b> <time datetime="01:00">8 min</time></span>
                            <span><b>$10.99</b></span>
                        </div>      
                    </div>
                </div>
                <div class="pizza">
                    <img class="absolute" src="${rucola}" alt="rucola image">
                    <div class="pizza__image">
                        <img src="${pizzaImg6}" alt="pizza 6 image">
                    </div>
                    <div class="pizza__text">
                        <div>
                            <span>XX:XX:XX</span>
                            <span>#6</span>
                        </div> 
                        <div>
                            <span><b>ETA:</b> <time datetime="01:00">7 min</time></span>
                            <span><b>$10.00</b></span>
                        </div>      
                    </div>
                </div>
                
                <div class="pizza">
                    <img class="absolute" src="${rucola}" alt="rucola image">
                    <div class="pizza__image">
                        <img src="${pizzaImg7}" alt="pizza 7 image">
                    </div>
                    <div class="pizza__text">
                        <div>
                            <span>XX:XX:XX</span>
                            <span>#7</span>
                        </div> 
                        <div>
                            <span><b>ETA:</b> <time datetime="01:00">2 min</time></span>
                            <span><b>$12.99</b></span>
                        </div>      
                    </div>
                </div>
                <div class="pizza">
                    <img class="absolute" src="${rucola}" alt="rucola image">
                    <div class="pizza__image">
                        <img src="${pizzaImg8}" alt="pizza 8 image">
                    </div>
                    <div class="pizza__text">
                        <div>
                            <span>XX:XX:XX</span>
                            <span>#8</span>
                        </div> 
                        <div>
                            <span><b>ETA:</b> <time datetime="01:00">4 min</time></span>
                            <span><b>$9.99</b></span>
                        </div>      
                    </div>
                </div>
                <div class="pizza">
                    <img class="absolute" src="${rucola}" alt="rucola image">
                    <div class="pizza__image">
                        <img src="${pizzaImg9}" alt="pizza 9 image">
                    </div>
                    <div class="pizza__text">
                        <div>
                            <span>XX:XX:XX</span>
                            <span>#9</span>
                        </div> 
                        <div>
                            <span><b>ETA:</b> <time datetime="01:00">2 min</time></span>
                            <span><b>$11.99</b></span>
                        </div>      
                    </div>
                </div>
            </div>
        </main>

        <footer>
            <div class="container">
                <span>
                    Kottans, Kottans str, <a href="tel:5777887">tel. 577-78-87</a> 
                </span>
                <span>
                    Pizza Manager &copy; 2018
                </span>
            </div>
        </footer>
      `;
    }
  }
  
  export default PizzaList;
  