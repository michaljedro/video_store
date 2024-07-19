import BookSingleCard from "./VideoSingleCard";

const VideosCard = ({ videos }) => {
  return (
    <div>
      {videos.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default VideosCard;
