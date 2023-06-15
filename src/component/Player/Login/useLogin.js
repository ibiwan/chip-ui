import { useCallback, useState } from 'react'

export const useLogin = (handleLoginForm) => {
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState()
  const clearUsernameError = () => setUsernameError()

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState()
  const clearPasswordError = () => setPasswordError()

  const handleUsernameChange = useCallback((event) => {
    const val = event.target.value
    if (val) { clearUsernameError() }
    setUsername(val)
  }, [])

  const handlePasswordChange = useCallback((event) => {
    const val = event.target.value
    if (val) { clearPasswordError() }
    setPassword(val)
  }, [])

  const submit = useCallback((event) => {
    if (event.key === 'Enter') {
      setUsernameError()
      if (!username) { setUsernameError('enter a username') }

      setPasswordError()
      if (!password) { setPasswordError('enter a password') }

      if (username && password) {
        handleLoginForm(username, password)

        setUsername('')
        setPassword('')
      }
    }
  }, [username, password, handleLoginForm])

  return {
    username,
    usernameError,
    handleUsernameChange,
    password,
    passwordError,
    handlePasswordChange,
    submit
  }
}