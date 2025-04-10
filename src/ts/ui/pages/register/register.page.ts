export default function registerPage (){

    return(
        `
        <main>
            <form id="register-form">
                <section>
                    <section>
                        <article>
                            <label for="firstname"></label>
                            <input name="firstname" class="input" id="firstname" type="text" placeholder="Entrer votre prénom" />
                        </article>
                        <article>
                            <label for="lastname"></label>
                            <input name="lastname" class="input" id="lastname" type="text" placeholder="Entrer votre nom" />
                        </article>
                        <article>
                            <label for="photo"></label>
                            <input name="photo" class="input" id="photo" type="file" />
                        <article>
                    </section>
                    <section>
                        <article>
                            <label for="email"></label>
                            <input name="email" class="input" id="email" type="email" placeholder="Entrer votre email" />
                        </article>
                        <article>
                            <label for="password"></label>
                            <input name="password" class="input" id="password" type="password" placeholder="Entrer un mot de passe" />
                        </article>
                        <article>
                            <label for="confirmed-password"></label>
                            <input name="confirmed-password" class="input" id="confirmed-password" type="password" placeholder="Confirmer le mot de passe" />
                        </article>
                    </section>

                </section>
                </section>
                    <button 
                        id="submit-button" 
                        type="submit" 
                        class="button is-primary"
                    >Valider</button>
                    <button 
                        id="reset-button" 
                        type="reset" 
                        class="button is-danger"
                    >Réinitialiser</button>
                </section>
            
            </form>
        </main>

        
        `
    )


}