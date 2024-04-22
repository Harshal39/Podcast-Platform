import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/CommonComponents/Header';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../firebase';
import Button from '../components/CommonComponents/Button';


function Profile() {

    const user = useSelector((state) => state.user.user);
    console.log("My user",user);
    if (!user) {
      return <p>Loading...</p>;
    }

    const handleLogout = () =>{
      signOut(auth)
        .then(() => {
        toast.success("User Logged Out!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
    };
    
  return (
    <div>
      <Header />
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.uid}</h1>
      <Button text={"Logout"} onClick={handleLogout} />
    </div>
  )
}

export default Profile
