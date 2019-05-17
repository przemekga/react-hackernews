import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import CommentList from "../../components/CommentsList/CommentList";
import StoryLine from "../../components/StoryLine/StoryLine";

const StoryCommentPage = ({ match }) => {
  const [commentsData, setCommentsData] = useState([]);
  const [storyData, setStoryData] = useState({});

  useEffect(() => {
    axios
      .get(`https://hn.algolia.com/api/v1/items/${match.params.id}`)
      .then(res => {
        setCommentsData(res.data.children);
        setStoryData(res.data);
      });
  }, []);

  return (
    <Fragment>
      <StoryLine storyData={storyData} />
      <CommentList comments={commentsData} />
    </Fragment>
  );
};

export default StoryCommentPage;
