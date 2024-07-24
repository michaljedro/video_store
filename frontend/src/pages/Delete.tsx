import { useState } from "react";
import BackButton from "../components/BackButton";
import Loader from "../components/Loader";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
`;

const Confirmation = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #c82333;
  }
`;

const DeleteVideo: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const handleDeleteVideo = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/videos/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <Container>
      <BackButton />
      <Title>Usuń Wideo</Title>
      {loading ? <Loader /> : ""}
      <Confirmation>
        <h3>Czy na pewno chcesz usunąć to wideo?</h3>
        <Button onClick={handleDeleteVideo}>Tak, usuń</Button>
      </Confirmation>
    </Container>
  );
};

export default DeleteVideo;
