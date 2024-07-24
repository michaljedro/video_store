import React from 'react';
import styled, { keyframes } from 'styled-components';

// Definiujemy animację dla loadera
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Stylizujemy kontener loadera
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Pełna wysokość widoku
`;

// Stylizujemy animację loadera
const Spinner = styled.div`
  border: 16px solid #f3f3f3; // Jasne szare obramowanie
  border-top: 16px solid #3498db; // Niebieskie obramowanie na górze
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
};

export default Loader;
