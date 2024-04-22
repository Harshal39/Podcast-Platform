import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/CommonComponents/Header';

function Profile() {
    const user = useSelector((state) => state.user.user);
    console.log("My user",user);
    
  return (
    <div>
      <Header />
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.uid}</h1>
    </div>
  )
}

export default Profile
