import { GET_HOUSES, CREATE_HOUSE, DELETE_HOUSE } from "gql/queries"
import { useGraphqlApi } from "hook/useGraphqlApi"

export const useGetHouses = (token) => {
  const { useAuthedLazyQuery } = useGraphqlApi(token)
  // console.log({token})
  return useAuthedLazyQuery(GET_HOUSES)
}

export const useCreateHouse = (token) => {
  const { useAuthedMutation } = useGraphqlApi(token)
  // console.log({token})
  const [createHouse, createStatus] = useAuthedMutation(
    CREATE_HOUSE, [GET_HOUSES]
  )
  const createWithName = (name) => {
    // console.log("creating with name", { name })
    createHouse({ variables: { createHouseInput: { name } } })
  }

  return [createWithName, createStatus]
}

export const useDeleteHouse = (token) => {
  const { useAuthedMutation } = useGraphqlApi(token)
  // console.log({token})
  const [deleteHouse, deleteStatus] = useAuthedMutation(DELETE_HOUSE, [GET_HOUSES])
  const deleteWithId = (houseId) => {
    const variables = { variables: { houseId } }
    // console.log(variables)
    deleteHouse(variables)
  }

  return [deleteWithId, deleteStatus]
}
