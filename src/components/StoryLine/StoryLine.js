import React from "react";
import { Link } from "react-router-dom";
import "./StoryLine.scss";

const StoryLine = ({ storyData }) => {
  return (
    <div className="storyLine">
      <div className="score">{storyData.points}</div>
      <div className="details">
        <h1 className="storyTitle">
          <a href={storyData.url}>{storyData.title}</a>
        </h1>
        <div className="detailsBottomLine">
          <div className="author">Author: {storyData.author}</div>
          {storyData.num_comments !== undefined ? (
            <div className="comments">
              <Link to={`/story/${storyData.objectID}`}>
                Comments ({storyData.num_comments})
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default StoryLine;
