import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <div className="navLogo">
          <Link to = "/Explore">
            <img src={require("../images/search.png")} alt="" />
          </Link>
        </div>

        <div className="navImgs">
            <img src={require("../images/invite.png")} alt="" />
            <img src={require("../images/calendar.png")} alt="" />
            <img src={require("../images/noti.png")} alt="" />
        </div>

        <div>
          <Link to = "/Profile">
              <img src={require("../images/b1.png")} alt="" />
          </Link>
        </div>
    </nav>
  );
}

export default Navbar