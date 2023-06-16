import { orchestrator } from 'satcheljs';

import { fetchPlayers, setPlayers } from 'state/actions/playerActions';
import { fetchPlayersFromApi } from 'state/effects/playerEffects';

orchestrator(fetchPlayers, async () => {
  const players = await fetchPlayersFromApi()
  setPlayers(players)
})
