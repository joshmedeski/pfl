import { DataFunctionArgs } from '@remix-run/server-runtime'
import { useLoaderData } from 'remix'

export function useInferredRouteData<
  T extends (args: DataFunctionArgs) => any
>() {
  return useLoaderData<Awaited<ReturnType<T>>>()
}
