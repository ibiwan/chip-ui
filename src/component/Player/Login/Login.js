import { useLogin } from 'component/Player/Login/useLogin.js'

export const Login = (props) => {
  const { handleLoginForm } = props
  const {
    username,
    usernameError,
    handleUsernameChange,
    password,
    passwordError,
    handlePasswordChange,
    submit,
  } = useLogin(handleLoginForm)

  return <>
    <div>{usernameError}</div>
    <input
      name="nothing you know about, browser"
      autoComplete="off"
      value={username}
      onChange={handleUsernameChange}
      onKeyUp={submit} />

    <div>{passwordError}</div>
    <input
      name="don't even try it"
      autoComplete="off"
      type='password'
      value={password}
      onChange={handlePasswordChange}
      onKeyUp={submit} />
  </>
}
