import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineForm, AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
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

const VideoSingleCard = ({ video }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Card>
      <Year>{video.title}</Year>
      {/* <Id>{video._id}</Id> */}
      <Info>
        <IconWrapper>
          <PiBookOpenTextLight />
        </IconWrapper>
        <Title>{video.publishYear}</Title>
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
          <AiOutlineForm />
        </Link>
        <Link to={`/videos/edit/${video._id}`}>
          <AiOutlineEye />
        </Link>
        <Link to={`/videos/delete/${video._id}`}>
          <AiOutlineDelete />
        </Link>
      </Operations>
      {showModal && (
        <VideoModal video={video} onClose={() => setShowModal(false)} />
      )}
    </Card>
  );
};

export default VideoSingleCard;
