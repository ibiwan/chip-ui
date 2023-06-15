import { orchestrator } from 'satcheljs';

import { fetchPlayers, setPlayers, setCurrentUser, fetchCurrentUser } from 'state/actions/playerActions.js';
import { fetchPlayersFromApi, fetchCurrentUserFromApi } from 'state/effects/playerEffects.js';

orchestrator(fetchCurrentUser, async () => {
  console.log("fetching current user")
  const currentUser = await fetchCurrentUserFromApi()
  console.log({ currentUser })
  setCurrentUser(currentUser)
})

orchestrator(fetchPlayers, async () => {
  console.log("fetching players")
  const players = await fetchPlayersFromApi()
  console.log({ players })
  setPlayers(players)
})
