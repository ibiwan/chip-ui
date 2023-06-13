import { useGraphqlApi } from "../../hook/useGraphqlApi"
import { gql } from "@apollo/client"

export const useUserApi = (token) => {
  const { useAuthedQuery } = useGraphqlApi(token)

  const useCurrentUserQuery = () => {
    return useAuthedQuery(
      gql`query CurrentUser {
        getCurrentPlayer{
          id 
          username 
          isAdmin
        }
      }`
    )
  }

  return ({ useCurrentUserQuery })
}
