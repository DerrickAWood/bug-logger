import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {},
    notes: [],
    activeNote: {},
    profile: {}
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBugs(state, bugs) {
      state.bugs = bugs
    },
    setActiveBug(state,bug){
      state.activeBug = bug
    },
    setNotes(state, notes) {
      state.notes = notes
    },
    setActiveNote(state, note) {
      state.activeNote = note
    },
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },




    getBugs({commit,dispatch}) {
      api.get('bugs')
        .then(res => {
          commit('setBugs', res.data)
          console.log(res.data);

        })
    },

    getBug({commit,dispatch}, bugId) {
      api.get('bugs/' + bugId)
        .then(res => {
          commit('setActiveBug', res.data)
          console.log(bugId);
          
        })
    },


    addBug({commit, dispatch}, bugData) {
      console.log(bugData);
      api.post('bugs', bugData)
        .then(serverBug => {
          dispatch('getBugs')
        })
    },



    getNote({
      commit,
      dispatch
    }, bugId) {
      api.get('bugs/' + bugId + '/notes')
        .then(res => {
          commit('setNotes', res.data)
          console.log(res.data);
        })
    },

    addNote({
      commit,
      dispatch
    }, noteId) {
      console.log(noteId.bugId, "this from the store");
      api.post('notes/', noteId)
        .then(serverBug => {
          dispatch('getNote', noteId.bugId)
        })
    },

    async deleteNote({commit,dispatch}, noteData){
        let res = await api.delete('notes/' + noteData.id)
        dispatch('getNote', noteData.bugId)
    }
  }
});
