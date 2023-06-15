import { mutator } from 'satcheljs';
import { setHouses } from 'state/actions/houseActions.js';
import { getHouseStore } from 'state/stores/houseStore.js';

export const amutator = mutator(setHouses, (actionMessage) =>
  getHouseStore().houses = actionMessage.houses
)
