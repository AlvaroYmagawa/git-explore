import styled from 'styled-components';
import PerfectScroll from 'react-perfect-scrollbar';
import { Form as Unform } from '@unform/web';

import { colors } from '~/styles';
import CustomButton from '~/components/Button';
import CustomInput from '~/components/Input';

export const Scroll = styled(PerfectScroll)`
  max-height: calc(100vh - 100px);
  padding-bottom: 24px;
  max-width: 100%;
`;

export const SearchBar = styled(Unform)`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const Input = styled(CustomInput)`
  background: ${colors.primaryDark};
  border-radius: 16px;
  border: none;
`;

export const Title = styled.h4`
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  color: ${colors.text};
  margin-bottom: 16px;
`;
