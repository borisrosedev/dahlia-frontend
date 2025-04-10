


export default class RegisterContainer {
    //ci-dessous une série d'attributs
    registerForm: HTMLFormElement

    constructor(){
        this.registerForm = document.getElementById('register-form') as HTMLFormElement
        this.registerForm.onsubmit = this.onSubmit.bind(this);
    }
    //méthode d'instance
    onSubmit(event:any){
        event.preventDefault() // empêche le rechargement automatique de la page
        const newFormData = new FormData(this.registerForm)
        console.log(newFormData.get('email'));
    }

}