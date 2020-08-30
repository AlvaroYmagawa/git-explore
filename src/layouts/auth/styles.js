import styled from 'styled-components';

// CUSTOM IMPORTS
import { colors } from '~/styles';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.primary};
  justify-content: center;

  .auth-form {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    background: ${colors.primaryDark};
    border-radius: 8px;
    padding: 64px;
    box-shadow: 2px 5px 5px ${colors.black30};
    z-index: 1;
  }

  .auth-title {
    color: ${colors.text};
    text-align: center;
    width: 100%;
    margin: 48px 0 16px;
    font-weight: 100;
  }

  .auth-logo {
    margin: 0 auto;
    height: 56px;
    width: 56px;
    color: ${colors.text};
  }

  .auth-input {
    margin-bottom: 16px;
  }

  .auth-button {
    margin-top: 16px;
  }

  .auth-footer {
    text-align: center;
    width: 100%;
    margin-top: 24px;
    font-size: 14px;

    p {
      color: ${colors.opaqueText};
      margin-bottom: 8px;
    }

    a {
      font-weight: bold;
      color: ${colors.text};

      &:hover {
        color: ${colors.accent};
      }
    }
  }
`;

export const Background = styled.div`
  position: fixed;
  height: 90vh;
  width: 100vw;
  background: url(${props => props.src}) center 100%;
  background-size: cover;
  top: 5vh;
  left: 0;

  @media (max-width: 600px) {
    display: none;
  }
`;
