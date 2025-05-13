import formComponent from "../../ui/components/form/form.component";



export default class RegisterContainer {
    //ci-dessous une série d'attributs
    registerForm: HTMLFormElement
    registerFormSection: HTMLElement
    constructor(){

        this.registerFormSection = document.getElementById('register-form-section')
        console.log(this.registerFormSection)
        this.registerFormSection.innerHTML = formComponent(this.formData() as any)
        this.registerForm = document.getElementById('register-form') as HTMLFormElement
        this.registerForm.onsubmit = this.onSubmit.bind(this);
    }

    formData() {
        return {
            id: "register-form",
            fields: [
               
                {
                    id: "firstname",
                    type: "text",
                    placeholder: "Entrer votre prénom"
                },
                {
                    id: "lastname",
                    type: "text",
                    placeholder: "Entrer votre nom"
                },
                {
                    id: "photo",
                    type: "file"
                },
                {
                    id: "email",
                    type: "email",
                    placeholder: "Entrer un email"
                },
                {
                    id: "password",
                    type: "password",
                    placeholder: "Entrer un mot de passe"
                },
                {
                    id: "confirmed-password",
                    type: "password",
                    placeholder: "Confirmer le mot de passe"
                }
            ],
            btns: [
                {
                    id: "submit-button",
                    content: "Valider",
                    type: "submit",
                    classNames: "is-success"
                },
                {
                    id: "reset-button",
                    content: "Réinitialiser",
                    type: "reset",
                    classNames: "is-danger"
                }
            ]
        }
    }


    //méthode d'instance
    // il peut y avoir de la latence
    async onSubmit(event:any){
        event.preventDefault() // empêche le rechargement automatique de la page
        const newFormData = new FormData(this.registerForm)
        console.log(newFormData.get('photo'));
        console.log(newFormData.get('password'))


        const request = {
            method: "POST",
            body: newFormData,
        }

        // lorsque vous n'êtes pas certain que la connexion aboutisse 
        // utiliser un try-catch pour capturer l'erreur
        try {
            const response = await fetch('http://localhost:3000/api/v1/users', request)
        } catch(err){
            console.log(err)
        }
 

    }

}