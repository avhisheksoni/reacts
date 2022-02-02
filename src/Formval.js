import React, { useState } from "react";


function Formval(){
    const [user,setUser] = useState("");
    const [passwd,setPasswd] = useState("");
    const [userErr,setUserErr] =useState(false);
    const [passErr,setPassErr] =useState(false);
    function appple(e){
        if(user.length < 3 || passwd.length <3 ){

            alert('not correct');
        }else{
            alert("all good :)-")
        }
      e.preventDefault();
    }
function userhandle(e){
    let item = e.target.value;
    if(item.length < 3){
        setUserErr(true);
    }else{
        setUserErr(false)
    }
    setUser(item);
}
function passhandle(e){
    let passhand = e.target.value;
    if(passhand.length < 3){
        setPassErr(true);
    }else{
        setPassErr(false)
    }
    setPasswd(passhand);
}
    return (
        <>
        <h2>Form validate</h2>
        <form onSubmit={appple}>
            <input type="text" placeholder="name" onChange={userhandle}/>{userErr?<span>In-valid</span>:""}<br /><br />
            <input type="text" placeholder="paasword" onChange={passhandle}/>{passErr?<span>Invalid</span>:""}<br /><br />
            <button type="submit" >Login</button>
        </form>
        </>
    )
}
export default Formval;

//features of class component thats can not be used by functional component i.e we use hooks like state,useEffect