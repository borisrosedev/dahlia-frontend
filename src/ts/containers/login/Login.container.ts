import { OnNavigate } from "../../custom-types/OnNavigate.type";
import LocalStorageDataSource from "../../data-sources/local-data-sources/localstorage.data-source";
import AuthService from "../../services/auth/auth.service";
import UserService from "../../services/user/user.service";



export default class LoginContainer {
    onNavigate:OnNavigate;
    isLoggingIn: boolean;
    userService: UserService;
    authService: AuthService;
    localStorageDataSource: LocalStorageDataSource;
    loginForm: HTMLFormElement

    constructor(onNavigate:OnNavigate, isLoggingIn: boolean = true){
        this.onNavigate = onNavigate;
        this.isLoggingIn = isLoggingIn;
        this.loginForm = document.getElementById('login-form') as HTMLFormElement;
        this.loginForm.onsubmit = this.onSubmit.bind(this);
        this.userService = new UserService();
        this.authService = new AuthService();
        this.localStorageDataSource = new LocalStorageDataSource();
    }

    async onSubmit(event:any){
        event.preventDefault();

        const isFormCompleted = this.isFormCompleted(this.formData)

        if(!isFormCompleted){
            console.log('Compléter le formulaire')
        }

        if(!this.isLoggingIn && this.arePasswordsIdentical(this.formData)){
            delete (this.formData as any).confirmedPassword
            await this.userService.register(this.formData)
                .then(() => {
                    this.redirect()
                })
        }

        if(!this.isLoggingIn && !(this.arePasswordsIdentical(this.formData))){
            console.log('Les mots de passe ne correspondent pas')
            return
        }

        if(this.isLoggingIn){
            await this.authService.login(this.formData)
                .then(() => {
                    this.redirect();
                })
        }
       
    }

    redirect(){
        if(this.isLoggingIn){
            if(this.localStorageDataSource.get("dahlia:token")){
                this.onNavigate("#dashboard")
            } else {
                this.loginForm.reset()
            }
        } else {
            this.loginForm.reset()
            this.onNavigate("#login")
        }
    }

    arePasswordsIdentical(data){
        return data.password == data.confirmedPassword
    }


    isFormCompleted(data): boolean {
        if(this.isLoggingIn){
            return data.email && data.password
        } else {
            return data.email && data.password && data.confirmedPassword
        }
    }

    formData(){
        const email = document.getElementById('email') as HTMLInputElement
        const password = document.getElementById('password') as HTMLInputElement
        const confirmedPassword = !this.isLoggingIn ? document.getElementById('confirmed-password') as HTMLInputElement : null

        return {
            email: email.value,
            password: password.value,
            confirmedPassword: confirmedPassword.value
        }

    }
}