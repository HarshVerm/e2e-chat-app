import { Route, Routes, useParams } from "react-router-dom";
import "./App.scss";
import React from "react";
import io from "socket.io-client";
import Chat from "./Components/Chat/Chat";

import Homepage from "./Components/Home/Home";
import Process from "./Components/Process/Process";

const socket = io.connect("http://localhost:8000");
function Appmain(props) {
  const params = useParams();
  console.log(params);
  return (
    <React.Fragment>
      <div className="right">
        <Chat
          username={params.username}
          roomname={params.roomname}
          socket={socket}
        />
      </div>
      <div className="left">
        <Process />
      </div>
    </React.Fragment>
  );
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Homepage socket={socket} />} />
        <Route path="/chat/:roomname/:username" element={<Appmain />} />
      </Routes>
    </div>
  );
}

export default App;
