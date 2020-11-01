import React from 'react';
import { FaGithub } from 'react-icons/fa';

// CUSTOM IMPORTS
import history from '~/services/history';
import Avatar from '~/components/Header/AvatarMenu';
import { Container, Left, Title } from './styles';

function Header() {
  return (
    <Container>
      <Left onClick={() => history.push('/home')}>
        <FaGithub id="github-icon" />
        <Title>GITHUB EXPLORE</Title>
      </Left>

      <Avatar style={{ marginLeft: 'auto' }} />
    </Container>
  );
}

export default Header;
