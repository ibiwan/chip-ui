import { orchestrator } from 'satcheljs';

import {
  invitePlayerToHouse,
  resetHouseViewMode,
  createHouse,
  deleteHouse,
  fetchHouses,
  editHouse,
  setHouses,
} from 'state/actions/houseActions';

import {
  fetchHousesFromApi,
  createHouseAtApi,
  deleteHouseAtApi,
  editHouseAtApi,
} from 'state/effects/houseEffects';

orchestrator(fetchHouses, async () => {
  try {
    const houses = await fetchHousesFromApi()
    setHouses(houses)
  } catch (e) { console.error('issue fetching list of houses', e) }
})

orchestrator(createHouse, async ({ name }) => {
  try {
    const result = await createHouseAtApi(name)

    if (result) {
      resetHouseViewMode()
      fetchHouses()
    }
  } catch (e) { console.error('issue creating house', e) }
})

orchestrator(editHouse, async ({ houseId, name }) => {
  try {
    const result = await editHouseAtApi(houseId, { name })

    if (result) {
      resetHouseViewMode()
      fetchHouses()
    }
  } catch (e) { console.error('issue editing house name', e) }
})

orchestrator(deleteHouse, async ({ house }) => {
  try {
    console.log("a",house)
    const result = await deleteHouseAtApi(house)
    console.log("b",result)

    if (result) {
      resetHouseViewMode()
      fetchHouses()
    }
  } catch (e) { console.error('issue deleting house', e) }
})

orchestrator(invitePlayerToHouse, async (actionMessage) => {
  try {
    console.log({ actionMessage })
  } catch (e) { console.error('issue inviting player to house', e) }
})
