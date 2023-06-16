import { createStore } from 'satcheljs';

// need to import to activate/execute file contents
import '../orchestrators/playerOrchestrators'
import '../mutators/playerMutators'

export const getPlayerStore = createStore(
  'playerStore',
  {
    players: [],
  }
)
