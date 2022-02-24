import React from 'react'
import DailyCardData from '../data/dailyCardData'

function DailyCard() {
    let data = DailyCardData
    // console.log(DailyCardData)
  return (
    <div className='cardDataCover'>
        <div className="cardDataChild">


        {
            data.map(({time , title , description}) =>{
                return (
                  <>
                    <span style={{ fontSize: "0.9rem" }}>{time}</span>
                    <span
                      style={{
                        fontSize: "1rem",
                        marginLeft: "0.6rem",
                      }}
                    >
                      {title}
                    </span>{" "}
                    <br />
                    <span style={{ fontSize: "1.2rem" , marginLeft : "3rem" , fontWeight : "600" }}>
                      {description}
                    </span>{" "}
                    <br />
                  </>
                );
            })
        }
        </div>
    </div>
  )
}

export default DailyCard