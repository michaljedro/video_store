import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import styled from 'styled-components';

interface BackButtonProps {
  destination?: string;
}

const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  background-color: #1e3a8a; /* Sky-800 color */
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    background-color: #1c3d8a;
  }
`;

const Icon = styled(BsArrowLeft)`
  font-size: 24px;
`;

const BackBtn: React.FC<BackButtonProps> = ({ destination = '/' }) => {
  return (
    <BackButtonContainer>
      <StyledLink to={destination}>
        <Icon />
      </StyledLink>
    </BackButtonContainer>
  );
};

export default BackBtn;
