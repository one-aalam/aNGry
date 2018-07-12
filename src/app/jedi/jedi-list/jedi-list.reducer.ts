
const initialState = [];


export function jediListReducer(state = initialState, action) {
  switch(action.type){
    case 'ADD_JEDI':
      return [...state, {...action.payload}];
    case 'DEL_JEDI':
      return state.filter(jedi => jedi.id !== action.payload.id);
    case 'LOAD_JEDIS':
      return action.payload.map(jedi => ({...jedi}))
    default:
      return state;
  }
}
