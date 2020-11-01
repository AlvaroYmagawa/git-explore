import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

import CustomCard from '~/components/Card';
import CustomInput from '~/components/Input';
import CustomButton from '~/components/Button';
import CustomFileInput from '~/components/FileInput';
import { colors } from '~/styles';

export const Card = styled(CustomCard)``;

export const Form = styled(Unform)`
  footer {
    display: flex;
    align-items: center;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid ${colors.primary};
  }
`;

export const Input = styled(CustomInput)`
  margin-bottom: 8px;
`;

export const FileInput = styled(CustomFileInput)``;

export const PhotoPreviewArea = styled.div`
  width: 100%;
  position: relative;
`;

export const DeletePhotoButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 24px;
  margin-right: 8px;
  border: none;
  background: ${colors.primaryDark};
  box-shadow: 5px 6px 8px ${colors.black30};
  padding: 8px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;

  &:hover {
    svg {
      color: ${colors.accent};
    }
  }

  svg {
    height: 20px;
    width: 20px;
    color: ${colors.text};
  }
`;

export const PhotoPreview = styled.img`
  margin-top: 16px;
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const Button = styled(CustomButton)`
  margin-left: auto;
  max-width: 40%;
  height: 40px;
`;
