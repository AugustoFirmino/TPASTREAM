import { io } from "socket.io-client";


const socket = io(
  "https://tpastream.onrender.com/",
  {
    transports:["websocket"]
  }
);


export default socket;