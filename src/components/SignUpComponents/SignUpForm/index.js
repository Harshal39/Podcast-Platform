import React from 'react';
import InputComponent from '../../CommonComponents/Input';
import Button from '../../CommonComponents/Button';
import { useState } from 'react';

function SignUpForm() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    
    const handleSignup = ()=>{
      console.log("Handling Signup")
    };

  return (
    <>
      <InputComponent 
        state={fullName} 
        setState={setFullName} 
        placeholder="Full name" 
        type="text" required={true}/>

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

        <InputComponent 
        state={confirmpassword} 
        setState={setConfirmpassword} 
        placeholder="Confirm-Password" 
        type="password" required={true}/>

        <Button text={"Signup"} onClick={handleSignup}/>
    </>
  )
}

export default SignUpForm
