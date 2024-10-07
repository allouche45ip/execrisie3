
import { useState } from "react";
let name="Allouche";
export default function Mybot(){
  console.log("rennder");
//methode1


     const [namee, setName] = useState('Allouche');


    //methode2
    // const state=useState('allouche');
    // const namee=state[0];
    // const setName=state[1];
   

    function vvvd(){
        if( namee =="Allouche"){
            setName("Mohamed");
        }else{
            setName("Allouche");
        }
        
    };
    return(
    <div>
        <button onClick={vvvd} >click mi</button> 

              <h2> {namee}</h2>          
    </div>


    );
 

     
}

