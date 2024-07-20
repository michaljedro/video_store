import VideoSingleCard from "./VideoSingleCard";

const VideosCard = ({ videos }) => {
  return (
    <div>
      {videos.map((item) => (
        <VideoSingleCard key={item._id} video={item} />
      ))}
    </div>
  );
};

export default VideosCard;
