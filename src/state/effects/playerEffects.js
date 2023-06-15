import { apolloClient } from 'context/graphql.js';
import { GET_PLAYERS, GET_CURRENT_USER } from 'gql/queries.js';

export const fetchCurrentUserFromApi = async () => {
  const result = await apolloClient.query({ query: GET_CURRENT_USER })
  console.log({ result })
  return result.data.getCurrentPlayer
}

export const fetchPlayersFromApi = async () => {
  const result = await apolloClient.query({ query: GET_PLAYERS })
  console.log({ result })
  return result.data.getAllPlayers
}
