export default (state=[], action={}) => {
  switch (action.type) {
    case 'GET_HEROES_BY_ID_SUCCESS': {
      // console.log("get monster reducer",action.payload)
      return  action.payload
    }
    default:
      return state;
  }
}
