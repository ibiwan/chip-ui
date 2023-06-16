import { mutator } from 'satcheljs';

import { setHouses } from 'state/actions/houseActions';

import {
  pickPlayerToInviteToHouse,
  resetHouseViewMode,
  startCreateHouse,
  startEditHouse,
} from 'state/actions/houseActions';

import {
  HouseListModes,
  getHouseStore,
} from 'state/stores/houseStore';

mutator(setHouses, ({ houses }) =>
  getHouseStore().houses = houses
)

mutator(resetHouseViewMode, () => {
  getHouseStore().houseListMode = {
    mode: HouseListModes.View,
    houseId: null
  }
})

mutator(startCreateHouse, () => {
  getHouseStore().houseListMode = {
    mode: HouseListModes.Create,
    houseId: null
  }
})

mutator(startEditHouse, ({ houseId }) => {
  getHouseStore().houseListMode = {
    mode: HouseListModes.EditName,
    houseId
  }
})

mutator(pickPlayerToInviteToHouse, ({ houseId }) => {
  getHouseStore().houseListMode = {
    mode: HouseListModes.InvitePlayer,
    houseId
  }
})
