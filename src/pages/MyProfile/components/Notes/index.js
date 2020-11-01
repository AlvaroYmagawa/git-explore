import React from 'react';

// APIs
import { getNotes, createNote } from '~/apis/notes';

// CUSTOM IMPORTS
import BaseList from '~/components/BaseList';
import NoteCell from './components/NoteCell';
import AddNoteCard from './components/AddNoteCard';
import { Scroll, Title } from './styles';

function Notes({ className }) {
  // STATES
  const [notes, setNotes] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  // FUNCTIONS
  React.useEffect(() => {
    const fetch = async () => {
      await getNotes({ setNotes, setIsLoaded });
    };

    fetch();
  }, []);

  async function handleAddNote(data) {
    await createNote({ noteData: data }).then(response => {
      setNotes([response.data, ...notes]);
    });
  }

  return (
    <Scroll>
      <Title>Minhas Notas</Title>
      <BaseList
        className={className}
        orientation="column"
        isLoaded={isLoaded}
        data={notes}
        headerComponent={<AddNoteCard onAddNote={handleAddNote} />}
        renderCell={cell => <NoteCell key={cell} note={cell} />}
        cellStyle={{ marginTop: 8 }}
      />
    </Scroll>
  );
}

export default Notes;
