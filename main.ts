import router from './router'
import './styles.scss'


// je vx que lorsque l'url de la 
// page change router soit appelée
window.onpopstate = () => router(window.location.hash);

router(window.location.hash)