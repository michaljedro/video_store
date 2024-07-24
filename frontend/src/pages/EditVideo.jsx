import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Loader";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
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

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
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

const EditVideo = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/videos/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("Wystąpił błąd. Sprawdź konsolę.");
        console.log(error);
      });
  }, [id]);

  const handleEditVideo = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/videos/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Wideo zostało zaktualizowane pomyślnie", {
          variant: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Błąd", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <Container>
      <BackButton />
      <Title>Edytuj Wideo</Title>
      {loading ? <Spinner /> : ""}
      <FormGroup>
        <Label>Tytuł</Label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Autor</Label>
        <Input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Rok Publikacji</Label>
        <Input
          type="number"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
        />
      </FormGroup>
      <Button onClick={handleEditVideo}>Zapisz</Button>
    </Container>
  );
};

export default EditVideo;
