import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Show from "./pages/Show";
import { Create } from "./pages/Create";
import { Edit } from "./pages/Edit";
import { Delete } from "./pages/Delete";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/details/:id" element={<Show />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </div>
  );
};

export default App;
