import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Divider, Note } from '../../components';
import { NotesContainer, NotesListContainer } from './styled';

export const Notes = () => {
  const { notesArray } = useSelector(({ notes })=> notes);

  const { pinnedNotes, unpinned } = useMemo(() => {
    return {
      pinnedNotes: notesArray.filter(({ pinned }) => pinned),
      unpinned: notesArray.filter(({ pinned }) => !pinned),
    }
  }, [notesArray]);

  const unpinnedNotesCount = useMemo( () => {
    return unpinned && unpinned.length ? unpinned.length : 0;
  }, [unpinned]);

  return (
    <NotesContainer>
      <NotesListContainer>
        { pinnedNotes && pinnedNotes.map(({ title, id, pinned}) => {
          return (<Note key={id} title={title} id={id} pinned={pinned} />)
        })}
      </NotesListContainer>
      <Divider count={unpinnedNotesCount} />
      <NotesListContainer>
        { unpinned && unpinned.map(({ title, id, pinned }) => {
          return (<Note key={id} title={title} id={id} pinned={pinned} />)
        })}
      </NotesListContainer>
    </NotesContainer>
  )
};
