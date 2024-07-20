import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import VideosTable from "../components/home/VideosTable";
import VideosCard from "../components/home/VideosCard";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/videos")
      .then((response) => {
        setVideos(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => setShowType("table")}>Table</button>
        <button onClick={() => setShowType("card")}>Card</button>
      </div>
      <div>
        <h1>Video List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox />
        </Link>
      </div>
      {loading ? (
        <Loader />
      ) : showType === "table" ? (
        <VideosTable videos={videos} />
      ) : (
        <VideosCard videos={videos} />
      )}
    </div>
  );
};

export default Home;
