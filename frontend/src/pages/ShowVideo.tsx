import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import Loader from "../components/Loader";

const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const Label = styled.span`
  font-weight: bold;
`;

interface Video {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
  createdAt: string;
  updatedAt: string;
}

const ShowVideo: React.FC = () => {
  const [video, setVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/videos/${id}`)
      .then((response) => {
        setVideo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <Container>
      <BackButton />
      <Title>Szczegóły Wideo</Title>
      {loading ? (
        <Loader />
      ) : (
        video && (
          <div>
            <InfoRow>
              <Label>Identyfikator</Label>
              <span>{video._id}</span>
            </InfoRow>
            <InfoRow>
              <Label>Tytuł</Label>
              <span>{video.title}</span>
            </InfoRow>
            <InfoRow>
              <Label>Autor</Label>
              <span>{video.author}</span>
            </InfoRow>
            <InfoRow>
              <Label>Rok publikacji</Label>
              <span>{video.publishYear}</span>
            </InfoRow>
            <InfoRow>
              <Label>Czas utworzenia</Label>
              <span>{new Date(video.createdAt).toString()}</span>
            </InfoRow>
            <InfoRow>
              <Label>Ostatnia aktualizacja</Label>
              <span>{new Date(video.updatedAt).toString()}</span>
            </InfoRow>
          </div>
        )
      )}
    </Container>
  );
};

export default ShowVideo;
