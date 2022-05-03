import { defineStore } from "pinia"

export const useModelStore = defineStore("model", {
  state: () => {
    return {
      stationData: [],
      satelliteData: []
    }
  },
})
