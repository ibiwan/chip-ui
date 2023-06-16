import { apolloClient } from 'context/graphql';

import {
  CREATE_HOUSE,
  DELETE_HOUSE,
  EDIT_HOUSE,
  GET_HOUSES,
} from 'gql/queries';

const getHousesQuery = { query: GET_HOUSES }

export const fetchHousesFromApi = async () => {
  console.log("will refetch")
  const result = await apolloClient.query(getHousesQuery)
  console.log("fetch result", result)
  return result.data.getAllHouses
}

export const createHouseAtApi = async (name) => {
  const result = await apolloClient.mutate({
    mutation: CREATE_HOUSE,
    variables: { createHouseInput: { name } },
    update: (cache, result, _query) => {
      const house = result.data.createHouse
      cache.modify({ // no id: modify root query
        fields: {
          getAllHouses: (previous, { toReference }) => {
            const newHouseRef = toReference(house)
            return [...previous, newHouseRef]
          }
        }
      })
    },
  })
  // apolloClient.cache.extract()

  return result?.data?.createHouse
}

export const editHouseAtApi = async (houseId, edits) => {
  const result = await apolloClient.mutate({
    mutation: EDIT_HOUSE,
    variables: { editHouseInput: { houseId, name: edits.name } },
    update: (cache, result, _query) => {
      const house = result.data.editHouse;

      cache.modify({
        fields: { name: (_oldName) => house.name }
      })
    }
  })

  return result.data.editHouse;
}

export const deleteHouseAtApi = async (house) => {
  const result = await apolloClient.mutate({
    mutation: DELETE_HOUSE,
    variables: { houseId: house.id },
    update: (cache, _result, _query) => {
      cache.evict(cache.identify(house))
      cache.gc()
    }
  })

  return result?.data?.deleteHouse
}
