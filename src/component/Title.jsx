import React from "react";

const Title = ({ title, ...props }) => {
  return (
    <div className="title">
      <h2 className="News_title" {...props}>
        {title}
      </h2>
    </div>
  );
};

export default Title;
