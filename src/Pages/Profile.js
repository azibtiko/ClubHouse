import React from 'react'
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="profileCover">
      <div className="profileNav">
          <Link to="/Home">
                <img src={require("../images/arrow.png")} alt="" />
          </Link>

        <div>
          <img src={require("../images/insta.png")} alt="" />
          <img src={require("../images/config.png")} alt="" />
          <img src={require("../images/user-img2.jpg")} alt="" />
        </div>
      </div>
      <div className="profileSect2cover">
        <div className="profileSect2">
          <img src={require("../images/user-img2.jpg")} alt="" />
          <div>
            <h3>Azib gondal</h3>
            <p>@azibGondal</p>
          </div>
          <div>
            <p>
              <span>0</span> followers
            </p>
            <p>
              <span>51</span> following
            </p>
          </div>

          <p>Add a bio</p>

          <div className="twitterndInsta">
            <div className="twinsta">
              <img src={require("../images/insta.png")} alt="" />
              <p>Add Instagram</p>
            </div>

            <div className="twinsta">
              <img src={require("../images/twitter.png")} alt="" />
              <p>Add Twitter</p>
            </div>
          </div>

          <div className="profileLastSect">
            <img src={require("../images/user-img2.jpg")} alt="" />
            <div>
              <p>Joined 14-july-2020</p>
              <p>
                nominated by <span>nafees gondal</span>
              </p>
            </div>
          </div>

          <section className="member">
            <p>member of </p> 
            <p>+</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Profile