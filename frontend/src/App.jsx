import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateVideo from "./pages/CreateVideo";
import ShowVideo from "./pages/ShowVideo";
import EditVideo from "./pages/EditVideo";
import DeleteVideo from "./pages/DeleteVideo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos/create" element={<CreateVideo />} />
      <Route path="/videos/details/:id" element={<ShowVideo />} />
      <Route path="/videos/edit/:id" element={<EditVideo />} />
      <Route path="/videos/delete/:id" element={<DeleteVideo />} />
    </Routes>
  );
};

export default App;
