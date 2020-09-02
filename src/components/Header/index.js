import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdExitToApp } from 'react-icons/md';
import { useDispatch } from 'react-redux';

// CUSTOM IMPORTS
import { Container, ExitButton, Title } from './styles';

function Header() {
  const dispatch = useDispatch();

  return (
    <Container>
      <FaGithub />
      <Title>GITHUB EXPLORE</Title>

      <ExitButton type="button" title="Exit">
        <MdExitToApp id="exit-icon" />
      </ExitButton>
    </Container>
  );
}

export default Header;
