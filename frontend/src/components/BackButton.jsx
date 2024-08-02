import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;

const BackButton = ({ destination = "/" }) => {
  return (
    <Container>
      <StyledLink to={destination}>
        <BsArrowLeft size={24} />
      </StyledLink>
    </Container>
  );
};

export default BackButton;
