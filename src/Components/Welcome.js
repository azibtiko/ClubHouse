import React from 'react'
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="welcomeCover">
      <h1>Welcome!</h1>
      <div className="welcomeInfo">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem vel,
          magni dicta consequuntur cumque quibusdam numquam id, a nihil cum
          alias culpa excepturi voluptas debitis.Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Dolorem vel, magni
        </p>
        <br /> <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem vel,
          magni dicta consequuntur cumque quibusdam numquam id, a nihil cum
          alias culpa excepturi voluptas debitis. magni dicta consequuntur
          cumque quibusdam numquam id, a nihil cum alias culpa excepturi
          voluptas debitis.
        </p>
        <br /> <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, unde!
        </p>
      </div>

      <div className="buttons">
        <Link to="/InfoCard">
          
          Get your username
          
        </Link>
        <br /> <br /> <br />
        <a href="#">Have an invite text? Sign in</a>
      </div>
    </div>
  );
}

export default Welcome