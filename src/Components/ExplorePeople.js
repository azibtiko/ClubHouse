import React from 'react'

function ExplorePeople({title , desc}) {
  return (
    <>
      <div className="individualPeople">
        <div className="peoplexInfo">
          <img src={require("../images/user-img.jpg")} alt="" />
          <div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </div>
        <button>follow</button>
      </div>

      
    </>
  );
}

export default ExplorePeople