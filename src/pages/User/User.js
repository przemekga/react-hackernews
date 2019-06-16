import React, { useState, useEffect, Fragment } from "react";
import StoryList from '../../components/StoryList/StoryList'

import axios from "axios";


const Header = ({ match }) => {
  const [userData, setUserData] = useState({});
  const [userStories, setUserStories] = useState([]);

  useEffect(() => {
    axios
      .get(`https://hn.algolia.com/api/v1/users/${match.params.id}`)
      .then(res => {
        setUserData(res.data);
      });
    axios
      .get(
        `https://hn.algolia.com/api/v1/search?tags=story,author_${
          match.params.id
        }`
      )
      .then(res => {
        setUserStories(res.data.hits);
      });
  }, []);

  return (
    <div className="user">
      <h1>Username: {userData.username}</h1>
      <h3>About:</h3>
      <p dangerouslySetInnerHTML={{ __html: userData.about }} />

      <h5>User stories:</h5>
      {userStories.length ? <StoryList storiesData={userStories} /> : <i>This user has no stories</i>}
    </div>
  );
};

export default Header;
