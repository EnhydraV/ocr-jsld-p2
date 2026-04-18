import { use } from 'react'

export function useFetch<T>(promise: Promise<T>, p0: undefined): T {
  return use(promise)
}