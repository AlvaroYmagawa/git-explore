import React from 'react';

// CUSTOM IMPORTS
import { Card, Description, Image, Button } from './styles';

function NoteCell({ note }) {
  const { description, photo, link, created_at: createdAt } = note;

  return (
    <Card>
      <Description>{description}</Description>

      {photo && <Image src={`http://localhost:3333/files/${photo}`} />}

      {link && <Button onClick={() => window.open(link)}>Acessar Link</Button>}
    </Card>
  );
}

export default NoteCell;
