import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InputComponent from '../CommonComponents/Input';
import { toast } from 'react-toastify';
import Button from '../CommonComponents/Button';
import FileInput from '../CommonComponents/Input/FileInput';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage, auth, db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';

function CreatePodcastForm() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [displayImage, setDisplayImage] = useState();
    const [bannerImage, setbannerImage] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        //toast.success("Handling Form");
        if(title && desc && displayImage && bannerImage){
            setLoading(true);
           //1. Upload files --> get downloadable links
           try{
            const bannerImageRef = ref(
                storage,
                `podcasts/${auth.currentUser.uid}/${Date.now()}`
               );
               await uploadBytes(bannerImageRef, bannerImage);
    
               const bannerImageUrl = await getDownloadURL(bannerImageRef);

               const displayImageRef = ref(
                storage,
                `podcasts/${auth.currentUser.uid}/${Date.now()}`
               );
               await uploadBytes(displayImageRef, displayImage);
    
               const displayImageUrl = await getDownloadURL(displayImageRef);

               const podcastData =  {
                title:title,
                description:desc,
                bannerImage:bannerImageUrl,
                displayImage:displayImageUrl,
                createdBy:auth.currentUser.uid,
              };

              const docRef = await addDoc(collection(db,"podcasts"), podcastData);
              setTitle("");
              setDesc("");
              setbannerImage(null);
              setDisplayImage(null);
              toast.success("Podcast Created");
              setLoading(false);
           }
           catch(e){
            toast.error(e.message);
            console.log(e);
            setLoading(false);
           }
           
           //2. create a new doc in new collection called podcasts
           //3. Save this new podcast episodes states in our podcasts
        }
        else{
            toast.error("Please Enter All Values");
        }
    }

    const displayImageHandle = (file) => {
        setDisplayImage(file);
    }

    const bannerImageHandle = (file) => {
        setbannerImage(file);
    }
  return (
    <>
     <InputComponent
        state={title} 
        setState={setTitle} 
        placeholder="Title" 
        type="text" required={true}/>

         <InputComponent 
        state={desc} 
        setState={setDesc} 
        placeholder="Description" 
        type="text" required={true}/>

        <FileInput 
        accept={"image/*"} 
        id="display-image-input"
         fileHandleFnc={displayImageHandle}
         text={"Display Image Upload"}/>

        <FileInput 
        accept={"image/*"} 
        id="banner-image-input" 
        fileHandleFnc={bannerImageHandle}
        text={"Banner Image Upload"}
        />

        <Button 
        text={loading ? "Loading":"Create Podcast"}
         disabled={loading} 
         onClick={handleSubmit}/>
    </>
  )
}

export default CreatePodcastForm
