import { apolloClient } from 'context/graphql.js';
import { GET_HOUSES } from 'gql/queries.js';

export const fetchHousesFromApi = async () => {
  const result = await apolloClient.query({ query: GET_HOUSES })
  return result.data.getAllHouses
}
