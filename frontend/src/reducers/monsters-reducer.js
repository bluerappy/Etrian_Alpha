export default (state=[], action={}) => {
  switch (action.type) {
    case 'GETMONSTERS_SUCCESS': {
      console.log("get monster reducer",action.payload)
      return  action.payload
    }
    case 'ADD_MONSTER' : {
      console.log("add monster reducer")
      const { monsters } = action.payload;
      return { 
        ...state,
        monsters: {
          ...state.monsters,
          monsters,
        },
      };
    }
    default:
      return state;
  }
}
