export default function fieldComponent ({ id, classNames, type, placeholder }) {
    return(
        `
            <article>
                <label for="${id}"></label>
                <input 
                    id="${id}" 
                    class="input ${classNames ?? ''}"
                    type="${type ?? 'text'}"
                    placeholder="${placeholder}"
                >
            </article>
        
        `
    )
}