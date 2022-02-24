import React from 'react'
import { resolvePath } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AllowNotification() {
  return (
    <div className="allowNotificationCover">
      <Link to="/Confirmation">
        <img src={require("../images/arrow.png")} alt="" />
      </Link>
      <p>Last, Important Step!</p>
      <br />
      <p>
        Enable notifications to know when <br /> people are talking
      </p>

      <div className="allow">
        <div>
          <p>
            "Clubhouse" Would Like to Send You <br /> Notifications
          </p>
          <p>
            Notifications may include alerts,sounds,
            <br />
            and icon badges
          </p>
        </div>
        <div className="allowChild">
          <Link to="/confirmation" style={{ textDecoration: "none" }}>
            <p>Don't Allow</p>
          </Link>
          <Link
            to="/Home"
            style={{ textDecoration: "none", borderRight: "none" }}
          >
            <p style={{ borderRight: "none" }}>Allow</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AllowNotification