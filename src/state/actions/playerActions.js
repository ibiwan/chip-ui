import { action } from 'satcheljs';

export const setCurrentUser = action(
  'SET_CURRENT_USER',
  (user) => ({ user })
)

export const setPlayers = action(
  'SET_PLAYERS',
  (players) => ({ players })
)

export const fetchCurrentUser = action(
  'FETCH_CURRENT_USER',
  () => {
    console.log("dispatching fetch current user")
    return {}
  }
)

export const fetchPlayers = action(
  'FETCH_PLAYERS',
  () => {
    console.log("dispatching fetch players")
    return {}
  }
)
