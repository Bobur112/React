import { Fragment, useState } from "react";

function Form (){

    const[username, setUsername] = useState();
    const[password, setPassword ] = useState();

    const changeUsername = (evt) => {
        setUsername(evt.target.value)
    }

    const changePassword = (evt) => {
        setPassword(evt.target.value)
    }

    return(
        <>

        <form>
            <h1>Username: {username}</h1>
            <h1>Password: {password}</h1>
            <input
             type="text"
              placeholder="username"
               required
               onChange={changeUsername} 
            />
            <input
                type="text"
                placeholder="password"
                 required
                 onChange={changePassword}
             />
        </ form>

        <p>{password?.length >0 && password.length < 6 ?  "Minimum 6 ta belgi bolsin" : ""}</p>
        
        </>
    )
}

export default Form;