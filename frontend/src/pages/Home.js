import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Register from "../components/Register";
import CreateRoom from "../components/CreateRoom";
import JoinRoom from "../components/JoinRoom";
import Editor from "../components/Editor";
// import RoomControls from "../components/RoomControls";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        {/* both /roster and /roster/:number begin with /roster */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/createroom" element={<CreateRoom />} />
        <Route path="/joinroom" element={<JoinRoom />} />
        <Route path="/editor" element={<Editor />} />
        {/* <Landing /> */}
      </Routes>
      <Footer />
    </Box>
  );
};

export default Home;
