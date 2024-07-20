import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Loader from "../components/Loader";

const ShowVideo = () => {
  const [video, setVideo] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/videos/${id}`)
      .then((response) => {
        setVideo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <BackButton />
      <h1>Show Videos</h1>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div>
            <span>Id</span>
            <span>{video._id}</span>
          </div>
          <div>
            <span>Title</span>
            <span>{video.title}</span>
          </div>
          <div>
            <span>Author</span>
            <span>{video.author}</span>
          </div>
          <div>
            <span>Publish Year</span>
            <span>{video.publishYear}</span>
          </div>
          <div>
            <span>Create Time</span>
            <span>{new Date(video.createdAt).toString()}</span>
          </div>
          <div>
            <span>Last Update Time</span>
            <span>{new Date(video.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowVideo;
