import { useLazyQuery, useMutation, useQuery } from '@apollo/client';

export const useGraphqlApi = (token) => {
  const useAuthedQuery = (query) => {
    return useQuery(
      query,
      { context: { token } }
    )
  }

  const useAuthedLazyQuery = (query) => {
    return useLazyQuery(
      query,
      { context: { token }, }
    )
  }

  const useAuthedMutation = (mutationRequest, dependentGets = []) => {
    return useMutation(
      mutationRequest,
      {
        context: { token },
        refetchQueries: dependentGets.map(query => ({ query }))
      }
    )
  }

  return { useAuthedQuery, useAuthedLazyQuery, useAuthedMutation }
}
