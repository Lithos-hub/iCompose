import { createStore } from 'vuex';

export default createStore({
  state: {
    isUsingSimpleRow: true,
    isUsingMultipleRow: false,
    isUsingSimpleCol: true,
    isUsingMultipleCol: false,
    isUsingFiltering: false,
    isUsingSorting: true,
    formCategory: 'Commerce',
    formObject: {},
  },
  mutations: {
    setSimpleRow(state) {
      if (state.isUsingMultipleRow) {
        state.isUsingSimpleRow = true;
        state.isUsingMultipleRow = false;
      } else {
        state.isUsingSimpleRow = false;
        state.isUsingMultipleRow = true;
      }
    },
    setMultipleRow(state) {
      if (state.isUsingSimpleRow) {
        state.isUsingMultipleRow = true;
        state.isUsingSimpleRow = false;
      } else {
        state.isUsingMultipleRow = false;
        state.isUsingSimpleRow = true;
      }
    },
    setSimpleCol(state) {
      if (state.isUsingMultipleCol) {
        state.isUsingSimpleCol = true;
        state.isUsingMultipleCol = false;
      } else {
        state.isUsingSimpleCol = false;
        state.isUsingMultipleCol = true;
      }
    },
    setMultipleCol(state) {
      if (state.isUsingSimpleCol) {
        state.isUsingMultipleCol = true;
        state.isUsingSimpleCol = false;
      } else {
        state.isUsingMultipleCol = false;
        state.isUsingSimpleCol = true;
      }
    },
    setFiltering(state) {
      if (state.isUsingSorting) {
        state.isUsingFiltering = true;
        state.isUsingSorting = false;
      } else {
        state.isUsingFiltering = false;
        state.isUsingSorting = true;
      }
    },
    setSorting(state) {
      if (state.isUsingFiltering) {
        state.isUsingFiltering = false;
        state.isUsingSorting = true;
      } else {
        state.isUsingFiltering = true;
        state.isUsingSorting = false;
      }
    },
    setFormCategory(state, category) {
      state.formCategory = category;
    },
    setFormObject(state, payload) {
      state.formObject = payload;
    },
  },
  actions: {
  },
  modules: {
  },
});
