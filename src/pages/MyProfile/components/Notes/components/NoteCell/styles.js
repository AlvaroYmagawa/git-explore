import styled from 'styled-components';

// CUSTOM IMPORTS
import { colors } from '~/styles';
import CustomCard from '~/components/Card';
import CustomButton from '~/components/Button';

export const Card = styled(CustomCard)`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const Button = styled(CustomButton)``;
