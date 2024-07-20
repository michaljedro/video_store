import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const VideosTable = ({ videos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Author</th>
          <th>Publish Year</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {videos.map((video, index) => (
          <tr key={video._id} className="h-8">
            <td>{index + 1}</td>
            <td>{video.title}</td>
            <td>{video.author}</td>
            <td>{video.publishYear}</td>
            <td>
              <div>
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VideosTable;
