import React from "react";
import axios from "axios";
import MessageList from "./MessageList.jsx";
import { socket, sendMessage, listenForMessage } from "./socket.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messages: []
    };
  }

  componentDidMount() {
    listenForMessage(message => {
      this.setState({
        message: message
      });
      this.state.messages.push(message);
    });
  }

  handleInput(e) {
    this.setState({
      message: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Socketchat</h1>
        <MessageList messages={this.state.messages} />
        <div>
          <form>
            <input type="text" onChange={e => this.handleInput(e)} />
            <button>Add </button>
          </form>
        </div>
      </div>
    );
  }
}
