import { useState } from "react"

export const Login = (props) => {
  const { login } = props

  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState()

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState()

  const handleUsernameChange = () => {
    return (event) => {
      const val = event.target.value
      if (val) { setUsernameError() }
      return setUsername(val)
    }
  }
  const handlePasswordChange = () => {
    return (event) => {
      const val = event.target.value
      if (val) { setPasswordError() }
      return setPassword(val)
    }
  }

  const submit = (event) => {
    if (event.key === 'Enter') {
      setUsernameError()
      if (!username) { setUsernameError('enter a username') }

      setPasswordError()
      if (!password) { setPasswordError('enter a password') }

      if (username && password) {
        login(username, password)

        setUsername('')
        setPassword('')
      }
    }
  }

  return <>
    <div>{usernameError}</div>
    <input
      name="nothing you know about, browser"
      autoComplete="off"
      value={username}
      onChange={handleUsernameChange()}
      onKeyUp={submit} />

    <div>{passwordError}</div>
    <input
      name="don't even try it"
      autoComplete="off"
      type='password'
      value={password}
      onChange={handlePasswordChange()}
      onKeyUp={submit} />
  </>
}
