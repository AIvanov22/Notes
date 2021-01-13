import styled from 'styled-components';

export const NoteViewContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.input`   
  width: 87%;
  margin-top: 2rem;
  height: 3rem;
  font-size: 1.2rem;
  text-align: start;
  font-family: monospace;
  font-weight: 600;
  border: none;
    
  &:focus  {
    outline: none;
  }
`

export const Content = styled.textarea`
  margin-top: 0.5rem;
  width: 87%;
  height: 44rem;
  resize: none;
  font-family: monospace;
  border: none; 
  line-height: 1.4rem;
  
  &:focus  {
   outline: none;
  }
`

export const Divider = styled.hr`
  width: 87%;
`;
