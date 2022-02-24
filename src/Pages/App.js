import React from 'react'
import Welcome from '../Components/Welcome'
import InfoCard from './InfoCard';
import Confirmation from './Confirmation';
import AllowNotification from './AllowNotification';
import Home from './Home';
import ExplorePage from './ExplorePage';
import Profile from './Profile';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/InfoCard" element={<InfoCard />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/AllowNotification" element={<AllowNotification />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Explore" element={<ExplorePage />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App