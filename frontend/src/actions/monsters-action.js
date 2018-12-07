export const GETMONSTERS_REQUEST  = 'GETMONSTERS_REQUEST';
export const ADD_MONSTERS = 'ADD_MONSTERS';

export function getMonstersList() {
  return {
      type : GETMONSTERS_REQUEST,
  };
}

export const addMonster = (monster) => ({
  type: ADD_MONSTERS,
  payload: monster
});