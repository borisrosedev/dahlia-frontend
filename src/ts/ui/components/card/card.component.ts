export default function cardComponent (context: string, {id, url, src, alt, name, description }:any){
    return(
        `
        <div class="card" id="card-${context}-${id}">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img
                        src="${url ?? src}"
                        alt="${alt ?? name}"
                    />
                </figure>
            </div>
            <div class="card-content">
                <div class="content">
                    ${description}
                </div>
            </div>
        </div>
        
        
        `
    )
}