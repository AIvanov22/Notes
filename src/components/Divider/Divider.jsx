import React, { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { AddButton } from '../index';
import { DividerContainer, Count, DividerLine } from './styled';
import { addNote } from '../../store/notes/actions';

export const Divider = ({ count }) => {
  const dispatch = useDispatch();

  const onAddNoteClick = async () => {
    const id = uuidv4();
    await dispatch(addNote(id));
  };

 const countText = useMemo(() => {
    if (count && count > 0) {
      if (count === 1) {
        return `All ${count} note`
      }
      return `All ${count} notes`
    }
    return null;
  }, [count])

  return (
    <DividerContainer>
      { countText && (
        <Count>
          {countText}
        </Count>
      )}
      <DividerLine />
      <AddButton onClick={onAddNoteClick} />
    </DividerContainer>
  );
};
