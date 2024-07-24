import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 500px;
  position: relative;
`;

const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
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

const Content = styled.p`
  margin-top: 20px;
  color: #555;
`;

interface Video {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
}

interface VideoModalProps {
  video: Video;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ video, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(event) => event.stopPropagation()}>
        <CloseIcon onClick={onClose} />
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
        <Content>Treść, którą chcesz wyświetlić</Content>
        <Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </Content>
      </Modal>
    </Overlay>
  );
};

export default Modal;
