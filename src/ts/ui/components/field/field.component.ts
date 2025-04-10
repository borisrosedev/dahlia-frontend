export default function fieldComponent ({ id, type, placeholder, classNames }: any) {
    
    if(id == "photo"){
        return(
            `
                <article>
                    <label for="${id}"></label>
                    <input id="${id}" type="${type}" name="${id}" class="file ${classNames ?? ''}"/>
                <article>
            
            `
        )
    }
    
    return(
        `
            <article>
                <label for="${id}"></label>
                <input id="${id}" name="${id}" class="input ${classNames ?? ''}" placeholder="${placeholder}"/>
            <article>
        
        `
    )
}