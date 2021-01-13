import types from './types';

const defaultNoteFields = {
  title: 'Untitled',
  content: '',
  pinned: false,
};

const initialState = {
  notesArray: [],
  activeNote: null,
};

export const notes = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NOTE:
      const { payload: { id } } = action;
      return { ...state, notesArray: [...state.notesArray, { ...defaultNoteFields, id }], activeNote: id };

    case types.DELETE_NOTE:
      const { payload: { id: deleteId } } = action;
      return { ...state, notesArray: state.notesArray.filter(({ id }) => id !== deleteId) };

    case types.PIN_NOTE:
      const { payload: { id: pinId } } = action;
      return { ...state, notesArray: state.notesArray.map((item) => {
          const { id } = item;
          if (id === pinId) item.pinned = !item.pinned;
          return item;
        })
      };

    case types.SET_ACTIVE_NOTE:
      const { payload: { id: activeId } } = action;
      return { ...state, activeNote: activeId };

    case types.SET_TITLE:
      const { payload: { title: newTitleValue } }= action;
      const newTitle = newTitleValue && newTitleValue.length > 0 ? newTitleValue : defaultNoteFields.title;

      return { ...state, notesArray: state.notesArray.map((item) => {
          const { id: itemId } = item;
          if(itemId === state.activeNote) item.title = newTitle;
          return item;
        })
      };

    case types.SET_CONTENT:
      const { payload: { content: newContent } }= action;
      return { ...state, notesArray: state.notesArray.map((item) => {
          const { id: itemId } = item;
          if(itemId === state.activeNote) item.content = newContent;
          return item;
        })
      };

    default:
      return state;
  }
};
