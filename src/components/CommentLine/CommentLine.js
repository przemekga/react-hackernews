import React, { Fragment } from "react";

const CommentLine = ({ commentData, replies }) => {
  function timeConverter(UNIX_timestamp) {
    const a = new Date(UNIX_timestamp * 1000);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
    const sec = a.getSeconds() < 10 ? "0" + a.getSeconds() : a.getSeconds();
    const time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  }

  const createdAt = timeConverter(commentData.created_at_i);

  return (
    <div className="comment">
      <div className="commentDetails">
        <div className="author">{commentData.author}</div>
        <div className="date">{createdAt}</div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: commentData.text }} />
      {replies}
    </div>
  );
};

export default CommentLine;
