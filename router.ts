import HomeContainer from "./src/ts/containers/home/home.container";
import LandingContainer from "./src/ts/containers/landing/Landing.container";
import homePage from "./src/ts/ui/pages/home/home.page";
import landingPage from "./src/ts/ui/pages/landing/landing.page";
import loginPage from "./src/ts/ui/pages/login/login.page";
import notFoundPage from "./src/ts/ui/pages/not-found/not-found.page";



const routes = {

    landing: {
        path: "",
        ui: landingPage,
        business: LandingContainer
    },
    home: {
        path: "#home",
        ui:homePage,
        business: HomeContainer
    },
    login: {
        path: "#login",
        ui:loginPage
    },
    notFound: {
        ui:notFoundPage
    }
}


function router(h:string){
    window.history.pushState({}, "", window.location.pathname + h)
    const root = document.getElementById('root')
    root.innerHTML = ""
    switch(h) {
        case routes.landing.path:
            root.innerHTML += routes.landing.ui()
            new routes.landing.business(window.onNavigate)
            break;
        case routes.home.path:
            root.innerHTML += routes.home.ui()
            new routes.home.business(window.onNavigate)
            break;
        case routes.login.path:
            root.innerHTML += routes.login.ui()
            break;
        default:
            root.innerHTML += routes.notFound.ui()
            break;
    }
}

export default router