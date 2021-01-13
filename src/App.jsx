import React from 'react';
import { AppContainer } from './styled';
import { Notes, NoteView } from './modules';

function App() {
  return (
    <AppContainer>
      <Notes />
      <NoteView />
    </AppContainer>
  );
}

export default App;
