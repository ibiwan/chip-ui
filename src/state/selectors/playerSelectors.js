import { getUserStore } from 'state/stores/playerStore.js'

export const selectCurrentUser = () => getUserStore().currentUser

export const selectPlayers = () => getUserStore().players
