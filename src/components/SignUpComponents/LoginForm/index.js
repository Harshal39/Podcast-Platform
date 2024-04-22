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
import { toast } from 'react-toastify';

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogin = async ()=>{
      console.log("Handling Login...");
      setLoading(true);
      if(email && password){
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
        toast.success("Login Successfull")
        setLoading(false);
        //Navigate to the profile page
        navigate("/profile");
  
        }
         catch(error) {
          console.log("Error signing in", error);
          setLoading(false);
          toast.error(error.message);
        }
      }
      else{
        toast.error("Make sure email and password are not empty");
        setLoading(false);
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


        <Button text={loading ? "Loading..." : "Login"}
         onClick={handleLogin} 
         disabled = {loading}/>
    </>
  )
}

export default LoginForm
