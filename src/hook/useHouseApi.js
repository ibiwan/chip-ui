import { GET_HOUSES, CREATE_HOUSE, DELETE_HOUSE } from "gql/queries"
import { useGraphqlApi } from "hook/useGraphqlApi"

export const useGetHouses = () => {
  const { useAuthedLazyQuery } = useGraphqlApi()
  return useAuthedLazyQuery(GET_HOUSES)
}

export const useCreateHouse = () => {
  const { useAuthedMutation } = useGraphqlApi()
  const [createHouse, createStatus] = useAuthedMutation(
    CREATE_HOUSE, [GET_HOUSES]
  )
  const createWithName = (name) => {
    createHouse({ variables: { createHouseInput: { name } } })
  }

  return [createWithName, createStatus]
}

export const useDeleteHouse = () => {
  const { useAuthedMutation } = useGraphqlApi()
  const [deleteHouse, deleteStatus] = useAuthedMutation(DELETE_HOUSE, [GET_HOUSES])
  const deleteWithId = (houseId) => {
    const variables = { variables: { houseId } }
    deleteHouse(variables)
  }

  return [deleteWithId, deleteStatus]
}
