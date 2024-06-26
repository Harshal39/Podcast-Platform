import React, { useEffect, useState } from 'react';
import Header from '../components/CommonComponents/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { collection, doc, getDoc, onSnapshot, query } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { toast } from 'react-toastify';
import Button from '../components/CommonComponents/Button';
import EpisodeDetails from '../components/Podcasts/EpisodeDetails';
import AudioPlayer from '../components/Podcasts/AudioPlayer';

function PodcastDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [podcast, setPodcast] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [playingFile, setPlayingFile] = useState("");

  console.log("ID", id);

  useEffect(() => {
    if (id) {
      console.log("Calling getData");
      getData();
      console.log(getData);
    }
  }, [id]);

  const getData = async () => {
    try {
      const docRef = doc(db, "podcasts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setPodcast({ id: id,...docSnap.data() });
      } else {
        toast.error("No such Podcast");
        navigate("/podcasts");
      }
    } catch (e) {
      toast.error(e.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
       query(collection(db, "podcasts", id, "episodes")),
       (querySnapshot) => {
          const episodesData = [];
          querySnapshot.forEach((doc) => {
             episodesData.push({id: doc.id, ...doc.data()});
          });
          setEpisodes(episodesData);
       },
       (error) => {
          console.log("Error Fetching Data:", error)
       }
    );

    return () => {
       unsubscribe();
    }
 }, [id])


  return (
    <div>
      <Header />
      <div className='input-wrapper' style={{ marginTop: "0rem" }}>
        {podcast.id && (
            <>
            <div 
            style={{
                display:'flex',
                justifyContent:'space-between', 
                alignItems:'center', 
                width:"100%",
              }}
                >
          <h1 className='podcast-title-heading'>{podcast.title}</h1>
          {podcast.createdBy == auth.currentUser.uid && ( 
          <Button 
          style={{width:"200px",margin:0}}
          text={"Create Episode"} 
          onClick={()=>{
            navigate(`/podcast/${id}/create-episode`);
        }}
        />
    )}
          </div>
          <div className='banner-wrapper'>
          <img src={podcast.bannerImage} />
          </div>
          <p className='podcast-description'>{podcast.description}</p>
          <h1 className='podcast-title-heading'>Episodes</h1>
          {episodes.length > 0 ? (
                     <>
                        {episodes.map((episode,index) => {
                           return (
                              <EpisodeDetails
                                 key={index}
                                 index={index + 1}
                                 title={episode.title}
                                 description={episode.description}
                                 audioFile={episode.audiofile}
                                 onClick={(file) => setPlayingFile(file)}
                              />
                           );
                        })}
                     </>
                  ) : (
                     <p>No Episodes</p>
                  )}
               </>
            )}
      </div>
      {playingFile && <AudioPlayer audioSrc = {playingFile} image={podcast.displayImage}/>}
    </div>
  );
}

export default PodcastDetailsPage;