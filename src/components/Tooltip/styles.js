import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  position: relative;

  span {
    display: flex;
    justify-content: center;
    text-align: center;
    min-width: 200px;
    background: red;
    padding: 8px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 8px;
    box-shadow: 0 2px 5px ${colors.black16};
    opacity: ${props => (props.visibility ? 1 : 0)};
    transition: opacity 0.4s ease;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(100% + 4px);
    color: #fff;

    &::before {
      content: '';
      border-style: solid;
      border-color: red transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const Children = styled.div`
  cursor: pointer;
`;
