import React from "react";
import CommentTree from "../CommentTree/CommentTree";

import "./CommentList.scss";

const CommentList = ({ comments }) => {
  return (
    <div className="comments">
      {comments.map(commentData => {
        return <CommentTree key={commentData.id} commentData={commentData} />;
      })}
    </div>
  );
};

export default CommentList;
