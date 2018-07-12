import {
  ADD_JEDI,
  DEL_JEDI,
  LOAD_JEDI
} from './jedi-list.constants';

let counter = 0;

export const addJedi = (name) => ({ type: ADD_JEDI, payload: { id: counter++, name }});
export const remJedi = (id) => ({ type: DEL_JEDI, payload: { id }});
export const loadJedis = (jedis) => ({ type: LOAD_JEDI, payload: jedis });
