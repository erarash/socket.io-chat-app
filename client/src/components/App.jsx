import React from "react";
import MessageList from "./MessageList.jsx";
// import styles from "../css/App.css";
import { socket, sendMessage, listenForMessage } from "./socket.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    listenForMessage(message => {
      this.setState({
        message: message
      });
    });
  }

  handleClick(e) {
    e.preventDefault();
    sendMessage(message => {
      console.log(message);
    });
  }

  render() {
    return (
      <div>
        <h1>Socketchat</h1>
        {/* <MessageList messages={this.state.messages} /> */}
        <div>
          <ul id="messages" />
          <form action="">
            <input id="m" autoComplete="off" />
            <button onClick={e => this.handleClick(e)}>Send</button>
          </form>
        </div>
      </div>
    );
  }
}
