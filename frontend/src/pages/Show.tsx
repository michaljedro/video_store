createdAt: string;
updatedAt: string;
}

const ShowVideo: React.FC = () => {
const [video, setVideo] = useState<Video | null>(null);
const [loading, setLoading] = useState(false);
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
