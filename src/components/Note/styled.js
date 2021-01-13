import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  div {
    display: none;
  }
  
  ${ifProp({ isActive: 'true' }, css`
     background-color: rgba(253, 214, 87, 0.5);
  `)}
  
  &:hover {
    background-color: rgba(253, 214, 87, 1);
    opacity: 1;
    div {
      display: flex;
    }
  }
`;

export const NoteTitle = styled.p`
  color: white;
  padding: 0 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 0.2rem;
`;

export const IconBlock = styled.div`
  display: flex;
  width: 3rem;
  height: 100%;
  align-items: center;
  justify-content: center;
   cursor: pointer;
`;

export const Pin = styled(IconBlock)`
  color: white;
  background-color: #1badf8;
`;

export const Delete = styled(IconBlock)`
  color: white;
  background-color: #ff3a2f;
`;

export const OptionsButtons = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const OptionsTrigger = styled.div`
  color: white;
  background-color: #343233;
  border-radius: 6px;
  padding: 0.2rem 0.5rem;
  margin-right: 0.8rem;
  cursor: pointer;
`;
