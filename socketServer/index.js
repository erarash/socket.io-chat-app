//socket server
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const path = require("path");

const PORT = 3000;

io.on("connection", socket => {
  console.log("a user has connected");
  messagelistener(socket);
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

messagelistener = socket => {
  socket.on("message", message => {
    console.log(message);
    socket.broadcast.emit("message", message);
  });
};

http.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
