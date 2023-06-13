import jwt_decode from "jwt-decode";

const { useState, useCallback, useEffect } = require("react")

const isValid = () => {
  const { token, username } = getLPT()
  try {
    const { username: tokenUsername } = jwt_decode(token)

    return username === tokenUsername
  } catch (e) {
    console.error("couldn't validate token 1", e)
    return false
  }
}

const earlyExpiry = (token) => {
  try {
    const { iat: issued, exp: expiry } = jwt_decode(token)

    const stale = 0.8 * (expiry - issued) + issued
    const delay = stale * 1000 - (new Date()).getTime()

    return { delay, stale }
  }
  catch (e) {
    console.error("couldn't validate token 2", e)

    return false
  }
}

const isFresh = () => {
  if (!isValid()) { return false }

  const nowTime = Math.floor((new Date()).getTime() / 1000)

  const { token } = getLPT()
  const { stale } = earlyExpiry(token)

  return nowTime < stale
}

const getLPT = () => {
  const username = localStorage.getItem('username')
  const password = localStorage.getItem('password')
  const token = localStorage.getItem('token')

  return { username, password, token }
}

const setStoredToken = (token) => {
  localStorage.setItem('token', token);
}

const setLPT = ({ username, password }) => {
  localStorage.setItem('username', username);
  localStorage.setItem('password', password)
}

const clearLPT = () => {
  localStorage.removeItem('username')
  localStorage.removeItem('password')
  localStorage.removeItem('token')
}

const submitLoginToApi = async () => {
  try {
    const { username, password } = getLPT()

    const result = await fetch("http://localhost:3000/auth/login", {
      mode: "cors", method: 'POST',
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify(
        { username, password }
      ),
    });

    const body = await result.json();

    return body
  } catch (e) {
    console.error('error logging in', e)
  }
}

export const useLogin = () => {
  const [token, setToken] = useState(null)
  const [needRefresh, setNeedRefresh] = useState(false)

  const loggedIn = token !== null

  const logout = useCallback(() => {
    clearLPT()
    setToken(null)
  }, [])

  const loginSuccess = useCallback((newToken) => {
    let useToken = newToken

    if (newToken) {
      setStoredToken(newToken)
    } else {
      ({ token: useToken } = getLPT());
    }

    setToken(useToken)

    const { delay } = earlyExpiry(useToken)
    setTimeout(
      () => setNeedRefresh(true),
      delay
    )
  }, [])

  const loginToApi = useCallback(async () => {
    const { token: newToken } = await submitLoginToApi()
    newToken ? loginSuccess(newToken) : logout()
  }, [loginSuccess, logout])

  const renew = useCallback(() => {
    setNeedRefresh(false)
    isValid() ? loginToApi() : logout()
  }, [logout, loginToApi])

  const handleLoginForm = useCallback((username, password) => {
    setLPT({ username, password })
    loginToApi()
  }, [loginToApi])

  const appStart = useCallback(() => {
    const fresh = isFresh()
    fresh ? loginSuccess() : setNeedRefresh(true)
  }, [loginSuccess])

  useEffect(appStart, [appStart])

  useEffect(() => {
    if (needRefresh) { renew() }
  }, [needRefresh, renew])

  return {
    token,
    loggedIn,
    handleLoginForm,
    logout
  }
}
