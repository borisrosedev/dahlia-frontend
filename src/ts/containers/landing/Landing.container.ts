import { OnNavigate } from "../../custom-types/OnNavigate.type";
import buttonComponent from "../../ui/components/button/button.component";




class LandingContainer {
    onNavigate: OnNavigate
    constructor(onNavigate: OnNavigate){
        this.onNavigate = onNavigate
        const landingSection = document.getElementById('landing-section');
        landingSection.innerHTML += buttonComponent({
            id: "landing-button",
            content: "Venez découvrir Dahlia",
            classNames: "is-success",
            type: "button"
        })

        const landingButton = document.getElementById("landing-button");
        landingButton.onclick = this.onClick.bind(this)
    }

    onClick() {
        this.onNavigate('#home')
    }
}


export default LandingContainer