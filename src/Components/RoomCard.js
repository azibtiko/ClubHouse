import React from 'react'
import {BsChatDots , BsChatDotsFill , BsFillPersonFill} from 'react-icons/bs'
import data from '../data/roomCardData.json'


function RoomCard() {


  return (
    <div className="roomCardCover">
      {data.map(({ title, sub_title, members  }) => {
        return (
          <>
            <div className="card">
              <div className="sect1">
                <p>{title}</p>
                <h4>{sub_title}</h4>
              </div>
              <div className="sect2">
                <div className="imgCover">
                  <img src={require("../images/user-img.jpg")} alt="" />
                  <img src={require("../images/user-img2.jpg")} alt="" />
                </div>

                <div className="member-cover">
                  {members.map(({ first_name, last_name }) => {
                    return (
                      <>
                        <div className="members">
                          <span>{first_name}</span>

                          <span>{last_name}</span>

                          <span>
                            <BsChatDots />
                          </span>
                        </div>
                      </>
                    );
                  })}

                  <span>
                    1.B <BsFillPersonFill /> / 6 <BsChatDotsFill />
                  </span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default RoomCard