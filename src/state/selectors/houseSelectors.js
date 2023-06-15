import { getHouseStore } from 'state/stores/houseStore.js';

export const selectHouses = () => getHouseStore().houses
