
import { useState } from "react"
export default function Input(){
    const [innp,setinnp]=useState("");

    function mohf(event){
        setinnp(event.target.value)

    }
return(

    <div>
        <label> Enter votre nom:</label>
        <input  value={innp}  onChange={mohf} />


    </div>
)

}