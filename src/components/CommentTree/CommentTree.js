import React from "react";
import CommentLine from "../CommentLine/CommentLine";

import "./CommentTree.scss";

const CommentTree = ({ commentData }) => {
  const nestedComments = commentData.children.map(comment => {
    return <CommentTree key={comment.id} commentData={comment} />;
  });

  return (
    <div className="tree">
      <CommentLine commentData={commentData} replies={nestedComments} />
    </div>
  );
};

export default CommentTree;
