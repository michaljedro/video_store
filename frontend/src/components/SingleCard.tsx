import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import VideoModal from "./VideoModal";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  text-align: center;
`;

const Year = styled.h2`
  color: #007bff;
`;

const Id = styled.h4`
  color: #555;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;

const Title = styled.h2`
  color: #333;
`;

const Author = styled.h2`
  color: #333;
`;

const Operations = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

interface Video {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
}

interface VideoSingleCardProps {
  video: Video;
}

const VideoSingleCard: React.FC<VideoSingleCardProps> = ({ video }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Card>
      <Year>{video.publishYear}</Year>
      <Id>{video._id}</Id>
      <Info>
        <IconWrapper>
          <PiBookOpenTextLight />
        </IconWrapper>
        <Title>{video.title}</Title>
      </Info>
      <Info>
        <IconWrapper>
          <BiUserCircle />
        </IconWrapper>
        <Author>{video.author}</Author>
      </Info>
      <Operations>
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
      </Operations>
      {showModal && (
        <VideoModal video={video} onClose={() => setShowModal(false)} />
      )}
    </Card>
  );
};

export default VideoSingleCard;
