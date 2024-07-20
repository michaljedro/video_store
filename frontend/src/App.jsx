import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateVideo";
import ShowBook from "./pages/ShowVideo";
import EditBook from "./pages/EditVideo";
import DeleteBook from "./pages/DeleteVideo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos/create" element={<CreateBook />} />
      <Route path="/videos/details/:id" element={<ShowBook />} />
      <Route path="/videos/edit/:id" element={<EditBook />} />
      <Route path="/videos/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
