import React from 'react'
import data from '../data/Explore.json'
import ExplorePeople from '../Components/ExplorePeople'
import ExploreSect3 from '../Components/ExploreSect3'
import { Link } from 'react-router-dom'

function ExplorePage() {
    let {people , conversation} = data
    
  return (
    <>
      <div className="exploreCover">
        <div className="exploreNav">
            <Link to = "/Home">
          <img src={require("../images/arrow.png")} alt="" />
            </Link>
          <h3>EXPLORE</h3>
          <p>hidden</p>
        </div>

        <div className="searchCover">
          <div className="search">
            <div>
              <img src={require("../images/search.png")} alt="" />
              <input type="text" placeholder="Find Peoples And Clubs" />
            </div>
          </div>
        </div>

        <div className="explorePeopleCover">
          <div className="explorePeople">
            <p>People to follow</p>
            <div className="peopleFollow">
              {people.map(({ title, description }) => {
                return <ExplorePeople title={title} desc={description} />;
              })}
            </div>
          </div>
        </div>

        <div className="exploreSect3cover">
            <p>Explore this community</p>
          <div className="exploreSect3">
              {
                  conversation.map(({title , discription})=>{
                      return <ExploreSect3 title = {title} desc = {discription} />

                  })
              }


          </div>
        </div>
      </div>
    </>
  );
}

export default ExplorePage