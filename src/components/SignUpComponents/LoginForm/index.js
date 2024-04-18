import React from 'react';
import InputComponent from '../../CommonComponents/Input';
import Button from '../../CommonComponents/Button';
import { useState } from 'react';

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = ()=>{
      console.log("Handling Login")
    };

  return (
    <>

        <InputComponent 
        state={email} 
        setState={setEmail} 
        placeholder="Email" 
        type="text" required={true}/>

        <InputComponent 
        state={password} 
        setState={setPassword} 
        placeholder="Password" 
        type="password" required={true}/>


        <Button text={"Login"} onClick={handleLogin}/>
    </>
  )
}

export default LoginForm
