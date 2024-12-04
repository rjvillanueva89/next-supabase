import {
  QueryKey,
  useQueryClient as useTanstackQueryClient,
} from '@tanstack/react-query'

export const useQueryClient = () => {
  const queryClient = useTanstackQueryClient()

  const refetch = async (key: QueryKey) => {
    await queryClient.refetchQueries({ queryKey: key })
  }

  const invalidateQueries = (key: QueryKey) => {
    queryClient.invalidateQueries({ queryKey: key })
  }

  return { refetch, invalidateQueries }
}
