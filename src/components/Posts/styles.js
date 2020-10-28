import styled from 'styled-components';

import CustomInput from '~/components/Input';
import { colors } from '~/styles';
import CustomButton from '~/components/Button';

export const Container = styled.div``;

export const Card = styled.div`
  background: ${colors.primaryDark};
  padding: 24px 40px;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 24px;
  width: 100%;
  max-width: 450px;
  box-shadow: 2px 2px 5px ${colors.black16};

  textarea {
    border-radius: 8px;
    padding: 8px 16px;
    resize: none;
    flex: 1;
    background: none;
    border: none;
    color: ${colors.black87};
    background: ${colors.primary};
    color: ${colors.text};

    &::placeholder {
      color: ${colors.opaqueText};
    }
  }
`;

export const FieldSet = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled(CustomInput)``;

export const PostList = styled.div``;
