import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faTrashAlt, faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import {  faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { deleteNote, pinNote } from '../../store/notes/actions';
import { setActiveNote } from '../../store/notes/actions';
import { Delete, NotesContainer, NoteTitle, OptionsButtons, OptionsTrigger, Pin } from './styled';

export const Note = ({ id, title, pinned }) => {
  const dispatch = useDispatch();
  const { activeNote } = useSelector(({ notes })=> notes);
  const [showOptions, setShowOptions] = useState(null);

  const isActive = useMemo (() => {
    return activeNote === id;
  },[activeNote, id])

  const onOptionsTriggerClick = () => setShowOptions(id);

  const onPinClick = () => dispatch(pinNote(id));

  const onDeleteClick = () => dispatch(deleteNote(id));

  const closeOptions = () => {
    if (showOptions === id) setShowOptions(null);
  };

  const onNoteClick = async () => {
    closeOptions();
    dispatch(setActiveNote(id));
  };

  return (
    <NotesContainer
      key={id}
      onClick={onNoteClick}
      onMouseLeave={closeOptions}
      isActive={isActive ? String(isActive) : undefined}
    >
      <NoteTitle>
        {title}
      </NoteTitle>
      { showOptions && showOptions === id ?
        (<OptionsButtons>
          <Pin onClick={onPinClick}>
            <FontAwesomeIcon icon={ pinned ? fasStar : farStar } />
          </Pin>
          <Delete onClick={onDeleteClick}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </Delete>
        </OptionsButtons>) : (
          <OptionsTrigger
            onClick={onOptionsTriggerClick}
          >
            <FontAwesomeIcon icon={faEllipsisV} />
          </OptionsTrigger>
        )
      }
    </NotesContainer>
  );
};
