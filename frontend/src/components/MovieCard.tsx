import styled from "styled-components";
import VideoSingleCard from "./VideoSingleCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

interface Video {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
}

interface VideosCardProps {
  videos: Video[];
}

const VideosCard: React.FC<VideosCardProps> = ({ videos }) => {
  return (
    <Container>
      {videos.map((item) => (
        <VideoSingleCard key={item._id} video={item} />
      ))}
    </Container>
  );
};

export default VideosCard;
