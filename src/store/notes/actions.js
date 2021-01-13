import types from './types';

export const addNote = (id) => ({
  type: types.ADD_NOTE,
  payload: { id },
});

export const deleteNote = (id) => ({
  type: types.DELETE_NOTE,
  payload: { id },
});

export const pinNote = (id) => ({
  type: types.PIN_NOTE,
  payload: { id },
});

export const setActiveNote = (id) => ({
  type: types.SET_ACTIVE_NOTE,
  payload: { id },
});

export const setTitle = (title) => ({
  type: types.SET_TITLE,
  payload: { title },
});

export const setContent = (content) => ({
  type: types.SET_CONTENT,
  payload: { content },
});
