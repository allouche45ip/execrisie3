import { useState } from "react";


export default function Forminput(){

  /// methode1

  function sub(event){
    event.preventDefault();
    console.log(formip)
    
    }

  const [formip,setformip]=useState({ name:"",email:"",age:"",info:"",contry:"", isStudent:false,sexe:""})
// methode2 
    // const [name,setname]=useState("");
     function forp(event){
        setformip({ ...formip,name:event.target.value})

     };
    // const [meail,setemail]=useState("");
    function femd(event){
        setformip({ ...formip,email:event.target.value})

     };
     function ssdf(event){
        setformip({ ...formip,age:event.target.value})
     }

     function text(event){
      setformip({ ...formip,info:event.target.value})
     }
   function select(event){
      setformip({ ...formip,contry:event.target.value})

   }
   function isSTD(event){
     setformip({ ...formip, isStudent:event.target.checked})
      
  
 }
 function sexse(event){
  setformip({ ...formip, sexe:event.target.value})
   

}

    return(
       

         <form onSubmit={sub}>

            <label > name: </label>
            <input value={formip.name}    onChange={forp}/*value={name} */ /*onChange={forp} *//> <br/> <br/>

            
           <label > email: </label>
             <input   value={formip.email}  onChange={femd}/*value={meail}  /*onChange={femd}*/ /><br/><br/> 
             
              <label> donne info</label>
             <textarea  value={formip.info} onChange={text}></textarea>


           
             <label>  contrie</label>
           <select  value={formip.contry}  onChange={select}>

            <option > ALG</option>
            <option > Tun</option>
            <option > Maroc</option>
            <option> itaile</option>

           </select>
           <hr></hr>
      <div  checked={formip.sexe} onChange={isSTD}>
           <input type="checkbox"/> isStudent 
        
       </div>


       <div>

        <input  value="Homme" type="radio" checked={formip.sexe =="Homme" }onChange={sexse}/>Homme
        <input value="femme" type="radio"checked={formip.sexe =="femme" }onChange={sexse}/>femme
        
        
       </div>
             <label > Age: </label>
             <input   value={formip.age}  onChange={ssdf}/*value={meail}  /*onChange={femd}*/ /><br/><br/> 

          <button> onSbmit</button>

        </form>

    );

}