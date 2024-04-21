import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import SignUpPage from './pages/SignUpPage';
import Profile from './pages/Profile';

function App() {
  return (
  <div className='App'>
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  </div>
  )
}

export default App;
