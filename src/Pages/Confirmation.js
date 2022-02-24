import React from 'react'
import { Link } from 'react-router-dom';

function Confirmation() {
  return (
    <div className="confirmationCover">
        <Link to="/InfoCard">
      <img src={require("../images/arrow.png")} alt="" />
        </Link>
      <h1>
        Enter the code <br /> we just texted you
      </h1>
      <input type="text" />
      <a href="#" style={{ marginTop: "1rem" }}>
        Didn't recieve it Tap to resend it
      </a>
      <Link to="/AllowNotification" >
        <button  className="nextBtn">
          next
        </button>
      </Link>
    </div>
  );
}

export default Confirmation