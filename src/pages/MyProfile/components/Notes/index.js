import React from 'react';
import { MdSearch } from 'react-icons/md';
import { useSelector } from 'react-redux';

// APIs
import { getNotes, createNote } from '~/apis/notes';

// CUSTOM IMPORTS
import BaseList from '~/components/BaseList';
import NoteCell from './components/NoteCell';
import AddNoteCard from './components/AddNoteCard';
import { Scroll, Title, SearchBar, Input, Button } from './styles';

function Notes({ className }) {
  const { admin } = useSelector(state => state.user.profile);

  // STATES
  const [search, setSearch] = React.useState('');
  const [notes, setNotes] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  // FUNCTIONS
  React.useEffect(() => {
    const fetch = async () => {
      await getNotes({ setNotes, setIsLoaded, search });
    };

    fetch();
  }, [search]);

  async function handleAddNote(data) {
    await createNote({ noteData: data }).then(response => {
      setNotes([response.data, ...notes]);
    });
  }

  return (
    <Scroll className={className}>
      <Title>Publicações</Title>

      <SearchBar
        onSubmit={data => {
          setSearch(data.search);
        }}
      >
        <Input
          name="search"
          placeholder="Pesquise por uma publicação"
          icon={<MdSearch />}
        />
      </SearchBar>

      <BaseList
        orientation="column"
        isLoaded={isLoaded}
        data={notes}
        headerComponent={admin && <AddNoteCard onAddNote={handleAddNote} />}
        renderCell={cell => <NoteCell key={cell} note={cell} />}
        cellStyle={{ marginTop: 8 }}
      />
    </Scroll>
  );
}

export default Notes;
