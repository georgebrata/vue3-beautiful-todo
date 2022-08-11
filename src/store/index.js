import { createStore } from "vuex";

const store = createStore({
  state: {
    doneCount: 0,
    items: [
      {
        title: "Initial item",
        date: new Date(),
      },
    ],
  },
  mutations: {
    INIT(state) {
      if (localStorage.getItem("store")) {
        const localState = JSON.parse(localStorage.getItem("store"));

        // https://vuex.vuejs.org/api/#replacestate
        this.replaceState(Object.assign(state, localState));
      }
    },
    ADD_ITEM(state, item) {
      state.items.unshift(item);
    },
    DELETE_ITEM(state, index) {
      state.items.splice(index, 1);
    },
    DONE_ITEM(state, index) {
      state.doneCount++;
      state.items.splice(index, 1);
    },
  },
  actions: {
    add({ commit }, item) {
      commit("ADD_ITEM", item);
    },
    delete({ commit }, index) {
      commit("DELETE_ITEM", index);
    },
    done({ commit }, index) {
      commit("DONE_ITEM", index);
    },
  },
  modules: {},
});

store.subscribe((mutation, state) => {
  // Store the items in localStorage
  localStorage.setItem("store", JSON.stringify(state));
});

export default store;
