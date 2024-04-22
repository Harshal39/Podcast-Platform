import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputComponent from '../../CommonComponents/Input';
import Button from '../../CommonComponents/Button';
import { auth, db } from "../../../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { setUser } from "../../../slices/userSlice";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function SignUpForm() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleSignup = async ()=>{
      console.log("Handling Signup...");
      setLoading(true);
      if(password===confirmpassword && password.length>=6 && fullName && email){
        try {
          //Creating User's Account
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = userCredential.user;
          console.log("user",user);
          
          //Saving user's details
          await setDoc(doc(db,"users",user.uid), {
            name:fullName,
            email:user.email,
            uid:user.uid,
          });

          //Save data in the redux, call the redux action
          dispatch(
            setUser({
            name:fullName,
            email:user.email,
            uid:user.uid,
          })
        );

        toast.success("User has been created");
        setLoading(false);
        navigate("/profile");

        }
         catch(e) {
          console.log("error",e);
          toast.error(e.message);
          setLoading(false);
        }
      }else{
        if(password!== confirmpassword){
          toast.error("Please make sure your password and confirm password matches!")
        }
        else if(password.length < 6){
          toast.error("Please make sure your password is more than 6 digits long")
        }
        setLoading(false);
        //throw an error
      }
      
      
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

        <Button 
        text={loading ? "Loading":"Signup"}
         disabled={loading} 
         onClick={handleSignup}/>
    </>
  )
}

export default SignUpForm
