import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <p>The path is no exist</p>
      <p>back to home</p>
      <Link to="/">Go Home</Link>
    </>
  );
};

export default Error;
