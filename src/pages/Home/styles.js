import styled from 'styled-components';
import { Form as RocketForm } from '@unform/web';
import PerfectScroll from 'react-perfect-scrollbar';

// CUSTOM IMPORTS
import CustomInput from '~/components/Input';
import { colors } from '~/styles';
import CustomButton from '~/components/Button';

export const Container = styled(PerfectScroll)`
  max-height: 100vh;
  padding-bottom: 24px;
`;

export const Form = styled(RocketForm)`
  background: ${colors.primaryDark};
  padding: 24px 40px;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 24px;
  width: 100%;
  max-width: 450px;
  box-shadow: 2px 2px 5px ${colors.black16};
`;

export const FormTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.text};
  margin-bottom: 16px;
`;

export const FieldSet = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled(CustomInput)``;

export const Button = styled(CustomButton)`
  height: 50px;
  margin-left: 8px;

  #search-icon {
    height: 24px;
    width: 24px;
  }
`;

export const Repos = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 16px auto 0 auto;
`;

export const RepoTitle = styled(FormTitle)``;

export const Repo = styled.div`
  cursor: pointer;
  background: ${colors.primaryDark};
  padding: 24px 40px;
  border-radius: 8px;
  width: 100%;
  box-shadow: 2px 2px 5px ${colors.black16};
  margin-bottom: 8px;
  transition: transform 0.3s;

  h4 {
    color: ${colors.text};
    font-weight: bold;
    font-size: 14px;
  }

  small {
    color: ${colors.opaqueText};
    font-size: 12px;
  }

  &:hover {
    transform: translateX(10px);
  }
`;
