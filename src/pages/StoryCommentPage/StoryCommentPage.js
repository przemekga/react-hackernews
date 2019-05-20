import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import CommentList from "../../components/CommentsList/CommentList";
import StoryLine from "../../components/StoryLine/StoryLine";
import Loader from "../../components/Loader/Loader";

const StoryCommentPage = ({ match }) => {
  const [commentsData, setCommentsData] = useState([]);
  const [storyData, setStoryData] = useState({});
  const [isLoading, toggleLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://hn.algolia.com/api/v1/items/${match.params.id}`)
      .then(res => {
        setCommentsData(res.data.children);
        setStoryData(res.data);
        toggleLoading(false);
      });
  }, [match.params.id]);

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <StoryLine storyData={storyData} />
          <CommentList comments={commentsData} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default StoryCommentPage;
