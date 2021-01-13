import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { NoteViewContainer, Title, Content, Divider } from './styled';
import { useSelector } from 'react-redux';
import { setTitle, setContent } from '../../store/notes/actions';

export const NoteView = () => {
  const dispatch = useDispatch();
  const notes = useSelector(({ notes })=> notes.notesArray);
  const activeNote = useSelector(({ notes })=> notes.activeNote);

  const { title, content } = useMemo(() => {
    const note = notes.find(({id}) => id === activeNote);
    if (note) {
      const { title, content } = note;
      return { title, content };
    }
    return { title: null, content: null };
  }, [activeNote, notes]);

  const onTitleChange = ({ target: { value } }) => {
    dispatch(setTitle(value));
  };

  const onContentChange = ({ target: { value } }) => {
    dispatch(setContent(value));
  };

  return(
    <NoteViewContainer>
      { activeNote ? (
        <>
          <Title onChange={onTitleChange} value={title} />
          <Divider />
          <Content onChange={onContentChange} value={content}/>
        </>
        ): null
      }
    </NoteViewContainer>
  )
};
