import React, { useState } from "react";
import { FcGlobe } from "react-icons/fc";
import { useReducer } from "react";
import { useResolvedPath } from "react-router-dom";


function reducer(state , action) {

    let newState = state
    switch (action.type) {
      case "open":{

          newState = "open";
          break;
        }

      case "social":{

          newState = "social";
          break;
        }
          
      case "close": {

          newState = "close";
          break;
        }
          
      default:
        break;
    }

    return newState
    
}


function Selectroom({ show , setGif ,gif , setShow ,showaCard ,showa }) {
  let initialState = "open";
  let [state, dispatch] = useReducer(reducer, initialState);
  let toggle = "toggleClass";
  let [first, setFirst] = useState(0);
  let [second, setSecond] = useState(0);
  let [third, setThird] = useState(0);

 

  function First() {
    setFirst(1);
    setSecond(0);
    setThird(0);
  }
  
  function Second() {
    setFirst(0);
    setSecond(1);
    setThird(0);
  }

  function Third() {
    setFirst(0);
    setSecond(0);
    setThird(1);
  }

  // function hiding() {
  //    setShow(-50)
  //    console.log("working " , show);

  // }

  return (
    <>
      <div className="selectRoomCard">
        <div
          className="roomCover"
          style={{
            bottom: `${show}%`,
          }}
        >
          <hr className="hr1"  />
          <h4> + Add a topic</h4>
          <div className="room">
            <div className="roomGlobe">
              <div className={first && "toggleClass"}>
                <FcGlobe
                  className="globe"
                  onClick={function () {
                    dispatch({ type: "open" });
                    First();
                  }}
                />
                <p>Open</p>
              </div>

              <div className={second && "toggleClass"}>
                <FcGlobe
                  className="globe"
                  onClick={function () {
                    dispatch({ type: "social" });
                    Second();
                  }}
                />
                <p>Social</p>
              </div>

              <div className={third && "toggleClass"}>
                <FcGlobe
                  className="globe"
                  onClick={function () {
                    dispatch({ type: "close" });
                    Third();
                  }}
                />
                <p>Closed</p>
              </div>
            </div>

            <div className="moreInfo">
              <p>Start a room {state} to every one </p>
              <button onClick={() => {
                  setGif(!gif)

                  setTimeout(()=>{
                    showaCard(true)
                  },6000)



              } }>Start room</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Selectroom;
