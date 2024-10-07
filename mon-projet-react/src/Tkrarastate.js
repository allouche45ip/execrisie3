
 import { useState } from "react";
export default function TKrarastate(){
    const [cont,setCont]=useState(0)

     function plasplas(){
        
            
            setCont(cont+1)
        
            setCont((c)=>{
                return c+1;
            })

           
    }
    return(
        <div>
            <h1> the conte {cont} :</h1>
            <button  onClick={plasplas}> +</button>


        </div>

    );
}