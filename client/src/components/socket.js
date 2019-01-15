//socket client
import socketIo from "socket.io-client";
const socket = socketIo("http://localhost:3000");

socket.emit("hello", "from socket.js in react");

let sendMessage = (message, cb) => {
  socket.emit("message", message);
};

let listenForMessage = cb => {
  socket.on("message", message => {
    cb(message);
  });
};

export { socket, sendMessage, listenForMessage };
