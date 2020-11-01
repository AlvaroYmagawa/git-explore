import styled from 'styled-components';

import { colors } from '~/styles';

export const Container = styled.div`
  position: relative;

  #arrow-top {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 30px;
    width: 30px;
    color: ${colors.accent};
    bottom: -25px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  border-radius: 50%;
  transition: transform 0.2s;
  box-shadow: 2px 5px 7px ${colors.black16};

  svg {
    height: 24px;
    width: 24px;
    color: ${colors.primaryDark};
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 7px 10px ${colors.black16};
  }
`;

export const NoAvatar = styled.div`
  min-height: 40px;
  min-width: 40px;
  background: ${colors.accent};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Option = styled.div`
  cursor: pointer;
  display: flex;
  color: ${colors.text};
  justify-content: center;
  background: ${colors.accent};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 2px 5px 7px ${colors.black16};
  margin-top: 8px;
  transition: transform 0.2s;
  font-weight: bold;
  align-items: center;

  p {
    margin: 0px;
    white-space: nowrap;
    margin-left: 8px;
  }

  svg {
    min-height: 20px;
    min-width: 20px;
    color: ${colors.text};
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 7px 10px ${colors.black16};
  }
`;
