import { mutator } from 'satcheljs';

import { setPlayers, setCurrentUser } from 'state/actions/playerActions.js';
import { getUserStore } from 'state/stores/playerStore.js';

mutator(setCurrentUser, (actionMessage) => {
  getUserStore().currentUser = actionMessage.user
})

mutator(setPlayers, (actionMessage) => {
  console.log({ actionMessage })
  getUserStore().players = actionMessage.players
})
