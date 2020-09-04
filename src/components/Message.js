import React from "react";
import "./Message.css";

function Message({ message }) {
  return (
    <>
      <div className="message">
        <h3>{message}</h3>
      </div>
    </>
  );
}

export default Message;
