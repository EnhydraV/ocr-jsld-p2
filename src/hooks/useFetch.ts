import { use } from 'react'

export function useFetch<T>(promise: Promise<T>): T {
  return use(promise)
}
// Anti-pattern 3 — Utilisation de `any` — typer pour garder les bénéfices TypeScript.

// TODO useFetch


// Anti-pattern 7 — État de chargement dérivé des données au lieu d'un état dédié (loading/error).
