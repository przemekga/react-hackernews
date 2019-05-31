import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Header = ({ match }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios
      .get(`https://hn.algolia.com/api/v1/users/${match.params.id}`)
      .then(res => {
        setUserData(res.data)
      });
  }, []);

  return (
    <div className="user">
      <h1>Username: {userData.username}</h1>
      <h3>About:</h3>
      <p dangerouslySetInnerHTML={{__html: userData.about}}></p>

    </div>
  );
};

export default Header;
