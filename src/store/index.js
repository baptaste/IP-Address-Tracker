import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
 state: {
   clients: {
    userClient: null,
    clientQuery: null,
   },
   settings: {
    inputValue: '',
    targetIP: '',
    APIKey: 'at_GQQdE11o4blMrVEXlzFZjCePgmLmv',
    isError: false,
    errorMsg: 'Error, make sure to enter a valid IP address.',
    mapAPIurl: `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=`,
   },
   map: {
    zoom: 13,
    center: [47.41322, -1.219482],
    marker: [47.41322, -1.219482],
    attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
   }
 },
 getters: {},
 mutations: {
  setUserClient (state, payload) {
    state.clients.userClient = payload
  },
  setClientQuery (state, payload) {
    state.clients.clientQuery = payload
  },
  setIsError (state, payload) {
    state.settings.isError = payload
  },
  setCenter (state, payload) {
    state.map.center = payload
  },
  setMarker (state, payload) {
    state.map.marker = payload
  },
 },
 actions: {}
});