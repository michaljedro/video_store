import styled from "styled-components";
import VideoSingleCard from "./VideoSingleCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const VideosCard = ({ videos }) => {
  return (
    <Container>
      {videos.map((item) => (
        <VideoSingleCard key={item._id} video={item} />
      ))}
    </Container>
  );
};

export default VideosCard;
