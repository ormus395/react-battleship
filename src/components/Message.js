import React from "react";
import "./Message.css";

function Message({ message }) {
  let messageList = message.map((m) => {
    return <li>{m}</li>;
  });
  return (
    <>
      <div className="message">
        <ul>{messageList}</ul>
      </div>
    </>
  );
}

export default Message;
