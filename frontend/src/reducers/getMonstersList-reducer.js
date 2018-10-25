export default (state=[], action={}) => {
  switch (action.type) {
    case 'GETMONSTERS_SUCCESS': {
      console.log("get monster reducer",action.payload)
      return  action.payload
    }
    default:
      return state;
  }
}
