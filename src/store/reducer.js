import { combineReducers } from 'redux';
import { notes } from './notes/reducer';

export const rootReducer = combineReducers({ notes });
