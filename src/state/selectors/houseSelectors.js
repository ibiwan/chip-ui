import { getHouseStore } from 'state/stores/houseStore';

export const selectHouses = () => getHouseStore().houses

export const selectHouseListMode = () => getHouseStore().houseListMode
