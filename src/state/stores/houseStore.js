import { createStore } from 'satcheljs';

import '../mutators/houseMutators.js'
import '../orchestrators/houseOrchestrators.js'

export const getHouseStore = createStore(
  'houseStore',
  { houses: [] }
);
