import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentList from "../../components/CommentsList/CommentList";

const StoryCommentPage = ({ match }) => {
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://hn.algolia.com/api/v1/items/${match.params.id}`)
      .then(res => {
        setCommentsData(res.data.children);
      });
  }, []);
  return <CommentList comments={commentsData} />;
};

export default StoryCommentPage;
