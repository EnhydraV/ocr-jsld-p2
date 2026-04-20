import { use } from 'react'

export function useFetch<T>(promise: Promise<T>): T {
  return use(promise)
}