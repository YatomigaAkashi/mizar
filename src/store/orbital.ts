import { defineStore } from 'pinia'

type Filter = 'all' | 'low' | 'middle' | 'high'

export const useOrbitalStore = defineStore('orbital', () => {
  let filter: Filter = $ref('all')

  const setFilter = (arg: Filter) => filter = arg

  return $$({
    filter,
    setFilter
  })
})
