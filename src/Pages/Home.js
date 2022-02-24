import React from 'react'
import Navbar from '../Components/Navbar'
import DailyCard from '../Components/DailyCard'
import RoomCard from '../Components/RoomCard'
import Selectroom from './Selectroom'
import { useEffect } from 'react'
import Newsheet from '../Components/Newsheet'

// import Newsheet from '../Components/Newsheet'

function Home() {

  let [show , setShow] = React.useState(-50)
  let [gif , setGif] = React.useState(0)
  let [showa , showaCard] = React.useState(false)
  useEffect(()=>{
      setTimeout(()=>{
          setShow(-50)
          setGif(0)
      },7000)
  },[show])
  

   
      return (
        <div className="homeCover">
          <Navbar />
          <DailyCard />
          <RoomCard />
          <button
            className="home-btn"
            onClick={() => {
              setShow(0);
            }}
          >
            Start a new room
          </button>
          <Selectroom
            show={show}
            setShow={setShow}
            setGif={setGif}
            gif={gif}
            showaCard={showaCard}
            showa={showa}
          />
          <img
            src={gif && require("../images/loader.gif")}
            alt=""
            className="homeGif"
          />

          <Newsheet showa={showa} showaCard={showaCard} />
        </div>
      );
}


export default Home