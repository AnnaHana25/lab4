import React from "react";

const Header = ({ title }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
