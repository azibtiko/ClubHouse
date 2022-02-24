import React, { useState } from 'react'
import {AiOutlineFile, AiOutlinePlus} from "react-icons/ai"
import { BsMicMuteFill , BsMicFill } from "react-icons/bs";


function Newsheet({showa , showaCard}) {
  let [mic , hideMic] = useState(false)

  return (
    <div
      className={showa ? "newSheetCover sheetToggleClass " : "newSheetCover"}
    >
      <div className="newSheet">
        <div className="navbar">
          <div className="navSect1">
            <img src={require("../images/arrow.png")} alt="" />
            <h3>Hailway</h3>
          </div>

          <div className="navSect2">
            <img src={require("../images/insta.png")} alt="" />
            <img src={require("../images/user-img2.jpg")} alt="" />
          </div>
        </div>

        <div className="section2Cover">
          <div className="section2">
            <div className="peopleGrid">
              <div>
                <img src={require("../images/user-img.jpg")} alt="" />
                <p>Azib gondal</p>
                <BsMicMuteFill
                  className={mic ? "micMute micHidden" : "micMute"}
                />
              </div>
              <div>
                <img src={require("../images/user-img2.jpg")} alt="" />
                <p>Usama Bhai</p>
                <BsMicMuteFill
                  className={mic ? "micMute micHidden" : "micMute"}
                />
              </div>
              <div>
                <img src={require("../images/user-img2.jpg")} alt="" />
                <p>khadija Noor</p>
                <BsMicMuteFill
                  className={mic ? "micMute micHidden" : "micMute"}
                />
              </div>
            </div>
            <footer className="newSheetFooter">
              <button onClick={() => showaCard(false)}>Leave Quietly</button>

              <div>
                <div className="footerPlus">
                  <AiOutlinePlus />
                </div>
                <AiOutlineFile />
                <BsMicFill onClick={() => hideMic(!mic)} />
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsheet