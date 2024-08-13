import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import VideosTable from "../components/home/VideosTable";
import VideosCard from "../components/home/VideosCard";
import styled from "styled-components";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
`;

const ButtonGroup = styled.div`
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
  text-decoration: none;
  margin-left: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

interface Video {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
  createdAt: string;
  updatedAt: string;
}

const Home: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showType, setShowType] = useState<string>("table");
  const navigate = useNavigate();
  const user = auth.currentUser;

  const logoutUser = async (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/videos")
      .then((response) => {
        setVideos(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <Container>
      <div>
        <div>
          <div>
            <div>
              <button type="submit" onClick={logoutUser}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <ButtonGroup>
        <Button onClick={() => setShowType("table")}>Tabela</Button>
        <Button onClick={() => setShowType("card")}>Karta</Button>
      </ButtonGroup>
      <div>
        <Title>Lista Wideo</Title>
        <AddButton to="/videos/create">
          <MdOutlineAddBox size={24} />
        </AddButton>
      </div>
      {loading ? (
        <Loader />
      ) : showType === "table" ? (
        <VideosTable videos={videos} />
      ) : (
        <VideosCard videos={videos} />
      )}
    </Container>
  );
};

export default Home;
