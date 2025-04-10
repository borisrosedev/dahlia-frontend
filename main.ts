import router from "./router";
import { OnNavigate } from "./src/ts/custom-types/OnNavigate.type";
import './styles.scss'
import f from './data/flowers.xml'

declare global {
    interface Window {
        onNavigate: OnNavigate
    }
}


window.onNavigate = router

console.log(f)
window.onpopstate = () => router(window.location.hash)

router(window.location.hash)