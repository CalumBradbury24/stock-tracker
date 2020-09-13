import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({linkTo, route, text }) => {
  return (
    <Link className="log-link" to={linkTo} onClick={route}>
      {text}
    </Link>
  );
};

export default CustomLink;
