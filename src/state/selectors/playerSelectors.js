import { getPlayerStore } from 'state/stores/playerStore'

export const selectPlayers = () => getPlayerStore().players
