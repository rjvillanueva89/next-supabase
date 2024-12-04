import {
  QueryKey,
  useQueryClient as useTanstackQueryClient,
} from '@tanstack/react-query'

export const useQueryClient = () => {
  const queryClient = useTanstackQueryClient()

  const refetch = async (key: QueryKey) => {
    await queryClient.refetchQueries({ queryKey: key })
  }

  return { refetch }
}
