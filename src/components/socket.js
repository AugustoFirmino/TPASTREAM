import { io } from "socket.io-client";


const socket = io(
  "https://recipient-starts-ron-purpose.trycloudflare.com",
  {
    transports:["websocket"]
  }
);


export default socket;