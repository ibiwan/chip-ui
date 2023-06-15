import { useLazyQuery, useMutation, useQuery } from '@apollo/client';

export const useGraphqlApi = () => {
  const useAuthedQuery = (query) => {
    return useQuery(
      query,
    )
  }

  const useAuthedLazyQuery = (query) => {
    return useLazyQuery(
      query,
    )
  }

  const useAuthedMutation = (mutationRequest, dependentGets = []) => {
    return useMutation(
      mutationRequest,
      {
        refetchQueries: dependentGets.map(query => ({ query }))
      }
    )
  }

  return { useAuthedQuery, useAuthedLazyQuery, useAuthedMutation }
}
