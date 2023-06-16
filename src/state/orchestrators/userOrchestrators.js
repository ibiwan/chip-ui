import { orchestrator } from 'satcheljs';

import {
  fetchCurrentUser,
  setCurrentUser,
  refreshToken,
  reloadLogin,
  logoutUser,
  goodToken,
  loginUser,
} from 'state/actions/userActions';

import {
  fetchCurrentUserFromApi,
  sendLoginToApi,
  getLPT,
  setLPT,
} from 'state/effects/userEffects';

import {
  isTokenValid,
  isTokenFresh,
  earlyExpiry,
  decodeToken,
} from 'state/functions/userFunctions';

orchestrator(fetchCurrentUser, async () => {
  try {
    const currentUser = await fetchCurrentUserFromApi()
    setCurrentUser(currentUser)
  } catch (e) {
    console.error('issue fetching current user', e)
  }
})

orchestrator(loginUser, async ({ username, password }) => {
  try {
    const result =await sendLoginToApi(username, password)
    const {token} = result
    setLPT({ username, password, token })
    goodToken(token)
  } catch (e) {
    console.error('issue logging in', e)
  }
})

orchestrator(goodToken, async ({ token }) => {
  try {
    const { delay } = earlyExpiry(decodeToken(token))
    setTimeout(refreshToken, delay)
    fetchCurrentUser()
  } catch (e) {
    console.error('issue handling good token', e)
  }
})

orchestrator(reloadLogin, async () => {
  try {
    const { username, password, token } = getLPT();
    const decodedToken = decodeToken(token)

    const isValid = isTokenValid(decodedToken, username)
    if (!isValid) { logoutUser(); return }

    const isFresh = isTokenFresh(decodedToken)
    if (isFresh) { goodToken(token); return }

    loginUser(username, password);
  } catch (e) {
    console.error('issue loading login on app start', e)
  }
})

orchestrator(refreshToken, async () => {
  try {
    const { username, password, token } = getLPT();

    const decodedToken = decodeToken(token)

    const isValid = isTokenFresh(decodedToken, username)
    if (isValid) { loginUser(username, password) }
  } catch (e) {
    console.error('issue refreshing token', e)
  }
})
