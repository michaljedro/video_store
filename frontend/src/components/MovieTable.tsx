import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Thead = styled.thead`
  background-color: #f8f9fa;
`;

const Th = styled.th`
  padding: 10px;
  border: 1px solid #dee2e6;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  height: 40px;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #dee2e6;
  text-align: center;
`;

const Operations = styled.div`
  display: flex;
  justify-content: space-around;
`;

interface Video {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
}

interface VideosTableProps {
  videos: Video[];
}

const VideosTable: React.FC<VideosTableProps> = ({ videos }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>No</Th>
          <Th>Tytuł</Th>
          <Th>Autor</Th>
          <Th>Rok publikacji</Th>
          <Th>Operacje</Th>
        </Tr>
      </Thead>
      <Tbody>
        {videos.map((video, index) => (
          <Tr key={video._id}>
            <Td>{index + 1}</Td>
            <Td>{video.title}</Td>
            <Td>{video.author}</Td>
            <Td>{video.publishYear}</Td>
            <Td>
              <Operations>
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
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default VideosTable;
