import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import SignUpPage from './pages/SignUpPage';
import Profile from './pages/Profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot,doc } from 'firebase/firestore';
import { auth,db } from './firebase';
import { setUser } from './slices/userSlice';
import { useDispatch } from 'react-redux';
import PrivateRoutes from './components/CommonComponents/PrivateRoutes';
import CreateAPodcastPage from './pages/CreateAPodcast';
import PodcastsPage from './pages/Podcasts';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
  const unsubscribeAuth = onAuthStateChanged(auth,(user) => {
    if (user) {
      const unsubscribeSnapshot = onSnapshot(
        doc(db,"users",user.uid),
        (userDoc) => {
          if(userDoc.exists()) {
            const userData = userDoc.data();
            dispatch(
              setUser({
                name:userData.name,
                email:userData.email,
                uid:user.uid,
                profilePic:userData.profilePic,
              })
            );
          }
        },
        (error) => {
          console.log("Error fetching user data:", error);
        }
      );
      return () => {
        unsubscribeSnapshot();
      };
    }
  });

  return () => {
    unsubscribeAuth();
  };
}, []);

  return (
  <div className='App'>
    <ToastContainer />
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route element={<PrivateRoutes />} >
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-a-podcast" element={<CreateAPodcastPage />} />
        <Route path="/podcasts" element={<PodcastsPage />} />
      </Route>
      </Routes>
    </Router>
  </div>
  )
}

export default App;
