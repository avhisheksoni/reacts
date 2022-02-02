import {useState} from 'react';

function From(){
    const [name,setName] = useState("");
    const [tnc,setTnc] = useState(false);
    const [movie,setMovie] = useState("");
   function apple(e){
       e.preventDefault();
       console.warn(name,tnc,movie);
   }
    return (
        <>
        
        <form onSubmit={apple}>
           
           <input type="text" name="" onChange={(e)=>setName(e.target.value)}/><br/><br/>
               <select onChange={(e)=>setMovie(e.target.value)}>
                   <option value="kahani">kahani</option>
                   <option value="Race">Race</option>
                   <option value="Diwarr">Diwar</option>
              </select><br/><br/>
              <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/>Accept<br/><br/>
              <button>Submit</button>
              

        </form>
        </>
    )
}
export default From;