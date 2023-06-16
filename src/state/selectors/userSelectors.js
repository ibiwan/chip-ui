import { getUserStore } from 'state/stores/userStore'

export const selectCurrentUser = () => getUserStore().currentUser

export const selectIsLoggedIn = () => getUserStore().currentUser !== null
