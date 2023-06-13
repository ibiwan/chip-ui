import { useContext } from "react"
import { useUserApi } from "./useUserApi"
import { LoginContext } from "context/login"

export const Player = () => {
  const token = useContext(LoginContext)

  const { useCurrentUserQuery } = useUserApi(token)

  const { loading, data } = useCurrentUserQuery()
  const currentUser = data?.getCurrentPlayer

  return <div className="card">
    <div>Current Player</div>
    <div className="card">
      {!loading && currentUser && <div>{currentUser.username}</div>}
    </div>
  </div>
}
