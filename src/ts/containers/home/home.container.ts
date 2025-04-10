import { OnNavigate } from "../../custom-types/OnNavigate.type";
import flowers from "../../../../data/flowers.xml"

export default class HomeContainer {
    onNavigate: OnNavigate
    homeFlowersSection: HTMLElement
    constructor(onNavigate: OnNavigate){
        this.onNavigate = onNavigate
        this.homeFlowersSection = document.getElementById("home-flowers-section") as HTMLElement;
        this.onInit()
    }

    onInit(){
        console.log(flowers)
    }
}