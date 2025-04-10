import RegisterContainer from "./src/ts/containers/register/register.container";
import registerPage from "./src/ts/ui/pages/register/register.page";



const ROUTES = {

    register: {
        path:"#register",
        ui: registerPage,
        business: RegisterContainer
    }

}

export default function(h:string) {
    // si je suis sur la page register -> #register
    // ça permet d'actualiser l'url de la page en fonction de la valeur de h
    window.history.pushState({}, "", window.location.pathname + h)
    const root = document.getElementById('root')
    root.innerHTML = ""

    switch(h){
        // autrement dit si hash = #register
        case ROUTES.register.path:
            // on met entre les balises 
            // <div id="root">tout le contenu de registerPage()</div>
            root.innerHTML += ROUTES.register.ui()
            new ROUTES.register.business()
            break;
        default:
            break;

    }
}
