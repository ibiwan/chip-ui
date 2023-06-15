import { orchestrator } from 'satcheljs';

import { setHouses, fetchHouses } from 'state/actions/houseActions.js';
import { fetchHousesFromApi } from 'state/effects/houseEffects.js';

orchestrator(fetchHouses, async () => {
  console.log("fetching houses")
  const houses = await fetchHousesFromApi()
  console.log({ houses })
  setHouses(houses)
})
