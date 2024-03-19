import React, { Children } from "react";

const Title = ({ title, ENGTitle }) => {
  return (
    <div className="title">
      <h2 className="News_title">
        {title}
        <br></br>
        <p className="ENG_title">{ENGTitle}</p>
      </h2>
    </div>
  );
};

export default Title;
