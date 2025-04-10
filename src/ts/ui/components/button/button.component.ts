function buttonComponent ({ id, classNames, content, type }) {
    return(
        `
            <button 
            id="${id}"
            class="button ${classNames ?? ''}"
            type="${type ?? 'button'}">${content}</button>
        
        `
    )
}

export default buttonComponent