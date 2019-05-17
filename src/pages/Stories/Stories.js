import React, { useState, useEffect } from "react";
import StoryList from "../../components/StoryList/StoryList";
import axios from "axios";

const Stories = ({ match }) => {
  const [storiesData, setStoriesData] = useState([]);

  const fetchStories = url => {
    axios.get(url).then(res => {
      setStoriesData(res.data.hits);
    });
  };

  useEffect(() => {
    switch (match.params.id) {
      case "top":
        fetchStories("https://hn.algolia.com/api/v1/search?query=&tags=story");
        break;
      case "new":
        fetchStories("https://hn.algolia.com/api/v1/search_by_date?tags=story");
        break;
      default:
        fetchStories("https://hn.algolia.com/api/v1/search?query=&tags=story");
        break;
    }
  }, []);

  return <StoryList storiesData={storiesData} />;
};

export default Stories;
