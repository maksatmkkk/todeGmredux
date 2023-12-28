import { createStore } from 'redux';
import { reducers as rootReducer } from './reducers';

export const store = createStore(rootReducer);
