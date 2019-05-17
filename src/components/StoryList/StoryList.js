import React from "react";
import StoryLine from "../StoryLine/StoryLine";

const StoryList = ({ storiesData }) => {
  return (
    <div>
      {storiesData.map(item => (
        <StoryLine storyData={item} />
      ))}
    </div>
  );
};

export default StoryList;
