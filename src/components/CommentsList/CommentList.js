import React, { Fragment } from "react";
import CommentTree from "../CommentTree/CommentTree";

const CommentList = ({ comments }) => {
  return (
    <Fragment>
      {comments.map(commentData => {
        return <CommentTree key={commentData.id} commentData={commentData} />;
      })}
    </Fragment>
  );
};

export default CommentList;
