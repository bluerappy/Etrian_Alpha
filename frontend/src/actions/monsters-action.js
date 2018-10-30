export function getMonstersList() {
  return {
      type : GETMONSTERS_REQUEST,
  };
}

//WITH FLOW
// export const addMonster = ( monsters: Object ) => ({
//   type: ADD_MONSTERS,
//   payload: {
//     monsters
//   }
// });

export const addMonster = (monsters) => ({
  type: ADD_MONSTERS,
  payload: {
    monsters
  }
});

export const GETMONSTERS_REQUEST  = 'GETMONSTERS_REQUEST';
export const ADD_MONSTERS = 'ADD_MONSTERS';