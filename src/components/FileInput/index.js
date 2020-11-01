import React from 'react';
import PropTypes from 'prop-types';
import { MdCameraAlt } from 'react-icons/md';

// APIs
import { uploadFile } from '~/apis/files';

// CUSTOM IMPORTS
import { Container, Label } from './styles';

function FileInput({ onFileUploaded }) {
  // STATE
  const [isUploading, setIsUploading] = React.useState(false);

  // FUNCTIONS
  const handleInputChange = async e => {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    setIsUploading(true);

    await uploadFile({ file: data }).then(response => {
      const previewUrl = `http://localhost:3333/files/${response.data.url}`;
      const { url } = response.data;

      onFileUploaded(previewUrl, url);
      setIsUploading(false);
    });
  };

  return (
    <Container>
      <Label htmlFor="fileInput">
        <MdCameraAlt />

        <h4>{isUploading ? 'Carregando...' : 'Escolha uma imagem'}</h4>
      </Label>

      <input
        type="file"
        id="fileInput"
        accept="image/*"
        onChange={e => handleInputChange(e)}
      />
    </Container>
  );
}

FileInput.propTypes = {
  onFileUploaded: PropTypes.func,
};

FileInput.defaultProps = {
  onFileUploaded: () => {},
};

export default FileInput;
