import React from 'react';
import InputComponent from '../../CommonComponents/Input';
import Button from '../../CommonComponents/Button';
import { useState } from 'react';
import { auth, db, storage } from "../../../firebase";
import { getDoc, doc } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from "../../../slices/userSlice";

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogin = async ()=>{
      console.log("Handling Login...");

      try {
        //Creating User's Account
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        const userDoc = await getDoc(doc(db,"users",user.uid));
        const userData = userDoc.data();
        console.log("userData",userData);

        
        //Save data in the redux, call the redux action
        dispatch(
          setUser({
          name:userData.name,
          email:user.email,
          uid:user.uid,
        })
      );
      //Navigate to the profile page
      navigate("/profile");

      }
       catch(error) {
        console.log("Error signing in", error);
      }
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
