import logo from './logo.svg';
import './App.css';
import Mybot from'./Mybot';
import Input from './Input';
import Forminput from './Forminput';
import { useState } from 'react';
import TKrarastate from './Tkrarastate';
let nextid=5;
function App() {

  const forstyle={
    paddingTop:"200px"
  }

return(

 <TKrarastate/>
 )



  // ...................ajoute dans state ary et DELETE et update......................
//   const[inpute,setinpute]=useState("");
//   const[nom,setnom]=useState([
//    { id:1,name: "mohamed"},
//    { id:2,name: "Ali"},
//    { id:3,name: "Youcef"},
//    { id:4,name: "Ahmed"}])
  
  

// const listp=nom.map ((dev)=>{
//   return <li key={dev.id}> {dev.name} 
//     <button style={{ position:"relative", left:"10px"}} onClick={()=>{
//       Fdelete(dev.id)
//     }}>Delete </button>


// <button style={{ position:"relative", left:"15px"}} onClick={()=>{
//       Fupdate(dev.id)
//     }}>Modifie </button>
    
//      </li> 
// });
 


// // function delete
// function Fdelete(id){
// const newnom=nom.filter((nn)=>{
//   if (nn.id == id) {return false;}
//   return true;
// });
// setnom(newnom);
// }
// // function update
// function Fupdate(id){
// const nomupate=nom.map((i)=>{
//   if(i.id==id){
//     let nb={...i,name:i.name + "00"}
//     return nb;
//   }else{
//     return i;
//   }
// });

//   setnom(nomupate)
// }




// // function ajoute
// function addclick(){
//   setnom([...nom,{id:nextid,name:inpute}]);
//   nextid=nextid + 1;
// }





// function ecrire(event){

//   setinpute(event.target.value)
// }
//   return (
//     <div className="App" style={forstyle} >
//         {listp}
//   <div>
//     <label> name::</label>
//         <input value={inpute} onChange={ecrire} /> 
//         <button onClick={addclick}>add </button>
// </div>
{/* ............................... */}





      {/* <Forminput /> */}
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           
        </a>
        <Mybot />
        <Input />
      </header> */}
 {/* ..................... ary list */}





//     </div>
//   );
 }

export default App;
