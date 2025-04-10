export default function buttonComponent ({id, content, type, classNames}: any){
    return(
        `
            <button id="${id}" type="${type ?? 'button'}" class="button ${classNames ?? ''}">${content}</button>
        
        `
    )
}