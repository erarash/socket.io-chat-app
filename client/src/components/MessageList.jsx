import React from "react";
import Message from "./Message.jsx";

export default function MessageList(props) {
  return (
    <div>
      <ul>
        {props.messages.map(message => (
          <li key={message}>
            <Message message={message} />
          </li>
        ))}
      </ul>
    </div>
  );
}
