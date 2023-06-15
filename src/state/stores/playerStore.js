import { createStore } from 'satcheljs';

import '../mutators/playerMutators.js'
import '../orchestrators/playerOrchestrators.js'

export const getUserStore = createStore(
  'userstore',
  {
    currentUser: null,
    players: [],
  }
)
