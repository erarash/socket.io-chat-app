import React from "react";
import axios from "axios";
import { socket, sendMessage, listenForMessage } from "./socket.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    // function bindings
  }

  componentDidMount() {
    listenForMessage(message => {
      this.setState({
        message: message
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <form>
            <input type="text" />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
