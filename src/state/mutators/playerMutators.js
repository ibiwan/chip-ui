import { mutator } from 'satcheljs';

import { getPlayerStore } from 'state/stores/playerStore';
import { setPlayers } from 'state/actions/playerActions';

mutator(setPlayers, (actionMessage) => {
  getPlayerStore().players = actionMessage.players
})
