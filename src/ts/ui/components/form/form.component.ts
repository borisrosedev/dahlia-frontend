import buttonComponent from "../button/button.component";
import fieldComponent from "../field/field.component";

export default function formComponent ({id, fields, btns }){

    return(`
        <form id="${id}">
            <section>
                ${(fields.map((el:any) => fieldComponent(el))).join("")}
            </section>
            </section>
                    ${(btns.map((el:any) => buttonComponent(el))).join("")}
            </section>  
        </form>
    
    `);
}