import React from "react";

function Marquee(props) {
  const message = props.match.params.text;
  return (
    <marquee>{message}</marquee>
  );
}

export default Marquee;
