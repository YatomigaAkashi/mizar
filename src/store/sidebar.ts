import { defineStore } from 'pinia'

export const useSideBarStore = defineStore('side-bar', () => {
  let show = $ref(true)

  const toggleShow = (value: boolean) => show = value

  return $$({
    show,
    toggleShow
  })
})
