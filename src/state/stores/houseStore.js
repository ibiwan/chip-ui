import { createStore } from 'satcheljs';

// need to import to activate/execute file contents
import '../orchestrators/houseOrchestrators'
import '../mutators/houseMutators'

// inviteesByHouse
// {...{houseId, playerId, inviteStatus}}

export const HouseListModes = {
  View: Symbol("view"),
  Create: Symbol("create"),
  EditName: Symbol("editName"),
  InvitePlayer: Symbol("invitePlayer"),
}

export const HousePlayerInviteModes = {
  Invited: Symbol("invited"),
  Requested: Symbol("requested"),
  Member: Symbol('member'),
  Present: Symbol("present"),
  Banned: Symbol("banned")
}

export const getHouseStore = createStore(
  'houseStore',
  {
    houses: [],
    houseListMode: { mode: HouseListModes.View, houseId: null },
    inviteesByHouse: {},
  }
);
