import styled, { css } from 'styled-components';
import { colors } from '~/styles';
import Tooltip from '~/components/Tooltip';

export const Container = styled.fieldset`
  width: 100%;
  border: none;
  min-height: 46px;
  border: 2px solid ${colors.primary};
  background: ${colors.primary};
  border-radius: 8px;
  transition: border-color 0.3s;

  ${props =>
    props.isErrored &&
    css`
      border-color: red;
    `};
`;

export const InputField = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;

  input,
  textarea {
    resize: none;
    margin: 16px;
    flex: 1;
    background: none;
    border: none;
    color: #fff;

    &::placeholder {
      color: ${colors.opaqueText};
    }
  }
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;

  svg {
    height: 24px;
    width: 24px;
    color: ${colors.opaqueText};
  }
`;

export const Error = styled(Tooltip)`
  margin-left: auto;
  cursor: pointer;

  svg {
    height: 20px;
    width: 20px;
    color: red;
  }
`;
