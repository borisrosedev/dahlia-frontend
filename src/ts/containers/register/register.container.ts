


class RegisterContainer {
    //ci-dessous une série d'attributs
    registerForm: HTMLFormElement

    constructor(){
        this.registerForm = document.getElementById('register-form') as HTMLFormElement

    }

    //méthode d'instance
    onSubmit(event:any){
        event.preventDefault() // empêche le rechargement automatique de la page
    }

}