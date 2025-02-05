import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CreateVideo from "./pages/CreateVideo";
import ShowVideo from "./pages/ShowVideo";
import EditVideo from "./pages/EditVideo";
import DeleteVideo from "./pages/DeleteVideo";

const Container = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/videos/create" element={<CreateVideo />} />
        <Route path="/videos/details/:id" element={<ShowVideo />} />
        <Route path="/videos/edit/:id" element={<EditVideo />} />
        <Route path="/videos/delete/:id" element={<DeleteVideo />} />
      </Routes>
    </Container>
  );
};

export default App;
