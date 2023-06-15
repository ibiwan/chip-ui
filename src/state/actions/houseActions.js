import { action } from 'satcheljs';

export const setHouses = action(
  'SET_HOUSES',
  (houses) => ({ houses })
)

export const fetchHouses = action(
  'FETCH_HOUSES',
  () => ({})
)
