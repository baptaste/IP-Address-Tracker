import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
 state: {
   clients: {
    userClient: {},
    clientQuery: {},
   },
   settings: {
    inputValue: '',
    targetIP: '',
    APIKey: 'at_GQQdE11o4blMrVEXlzFZjCePgmLmv',
    isError: false,
    errorMsg: 'Error, make sure to enter a valid IP address.',
   },
 },
 getters: {},
 mutations: {
  setClientQuery (state, payload) {
    state.clients.clientQuery = payload
  },
  setIsError (state, payload) {
    state.settings.isError = payload
  },
 },
 actions: {}
});