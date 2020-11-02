import React from 'react';
import * as Yup from 'yup';
import { MdEdit, MdClose } from 'react-icons/md';

// CUSTOM IMPORTS
import { isDataValid } from '~/utils/validations';
import { getYupErrors } from '~/utils/yup';
import {
  Card,
  Form,
  Input,
  Button,
  FileInput,
  PhotoPreviewArea,
  DeletePhotoButton,
  PhotoPreview,
} from './styles';

function AddNoteCard({ onAddNote }) {
  // REFS
  const formRef = React.useRef(null);

  // STATE
  const [photoPreview, setPhotoPreview] = React.useState(null);
  const [photoUrl, setPhotoUrl] = React.useState(null);

  // FUNCTIONS
  const handleSubmit = React.useCallback(
    async (data, { reset }) => {
      try {
        // Clear errors
        if (isDataValid(formRef.current)) formRef.current.setErrors({});

        const schema = Yup.object().shape({
          description: Yup.string().required(
            'A Descrição da nota é obrigatória'
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        onAddNote({ ...data, photo: photoUrl });

        // Clear form
        setPhotoUrl(null);
        setPhotoPreview(null);
        reset();
      } catch (err) {
        // Format yup errors
        const errors = getYupErrors(err);

        // Set errors into form inputs
        if (isDataValid(formRef.current)) formRef.current.setErrors(errors);
      }
    },
    [onAddNote, photoUrl]
  );

  return (
    <Card>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="description"
          placeholder="Digite sua nota"
          isTextArea
          icon={<MdEdit />}
        />

        <Input name="link" placeholder="Adicione um link" icon={<MdEdit />} />

        {photoPreview && (
          <PhotoPreviewArea>
            <DeletePhotoButton
              title="Excluir foto"
              type="button"
              onClick={() => setPhotoPreview(null)}
            >
              <MdClose />
            </DeletePhotoButton>

            <PhotoPreview src={photoPreview} alt="Foto da nota" />
          </PhotoPreviewArea>
        )}

        <footer>
          <FileInput
            onFileUploaded={(previewUrl, url) => {
              setPhotoPreview(previewUrl);
              setPhotoUrl(url);
            }}
          />

          <Button type="submit">Salvar</Button>
        </footer>
      </Form>
    </Card>
  );
}

export default AddNoteCard;
