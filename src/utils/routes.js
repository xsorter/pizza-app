import Register from "../components/Register";
import Login from "../components/Login";
import PizzaList from "../components/PizzaList";

const routes = [
    {
        href: '/',
        component: PizzaList,
        onEnter: handleRedirect => {
            if(true){
                window.location.hash = "/login";
            }
        }
    },
    {
        href: '/login',
        component: Login
    },
    {
        href: '/register',
        component: Register
    }
];

export default routes;