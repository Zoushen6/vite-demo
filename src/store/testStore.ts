import { defineStore } from "pinia";

interface currentInfoType {
  id: string;
  name: string;
}

export const testStore = defineStore({
  id: "testStore",
  state: (): currentInfoType => ({
    id: "0010",
    name: "ZouShen",
  }),

  getters: {
    getAll: (state) => {
      return {
        id: state.id,
        name: state.name,
      };
    },
  },

  actions: {
    setCurrentInfo(id: string, name: string) {
      this.id = id;
      this.name = name;
    },

    removeCurrentInfo() {
      this.id = "";
      this.name = "";
    },
  },
});
