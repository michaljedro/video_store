import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import VideoModal from "./VideoModal";

const VideoSingleCard = ({ video }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h2>{video.publishYear}</h2>
      <h4>{video._id}</h4>
      <div>
        <PiBookOpenTextLight />
        <h2>{video.title}</h2>
      </div>
      <div>
        <BiUserCircle />
        <h2>{video.author}</h2>
      </div>
      <div>
        <BiShow onClick={() => setShowModal(true)} />
        <Link to={`/videos/details/${video._id}`}>
          <BsInfoCircle />
        </Link>
        <Link to={`/videos/edit/${video._id}`}>
          <AiOutlineEdit />
        </Link>
        <Link to={`/videos/delete/${video._id}`}>
          <MdOutlineDelete />
        </Link>
      </div>
      {showModal && (
        <VideoModal video={video} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default VideoSingleCard;
