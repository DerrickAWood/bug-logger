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




    async getBugs({commit,dispatch}) {
      await api.get('bugs')
        .then(res => {
          commit('setBugs', res.data)
          console.log(res.data);

        })
    },

    async getBug({commit,dispatch}, bugId) {
      await api.get('bugs/' + bugId)
        .then(res => {
          commit('setActiveBug', res.data)
          console.log(bugId);
          
        })
    },


    async addBug({commit, dispatch}, bugData) {
      console.log(bugData);
      await api.post('bugs', bugData)
        .then(serverBug => {
          dispatch('getBugs')
        })
    },

    async editBug({commit, dispatch}, payload){
      try {
        console.log(payload);
        let res = await api.put('bugs/' + payload.id, payload)
      } catch (error) {
        console.log(error)
      }
    },


    // FIXME
    async closeBug({commit, dispatch}, payload){
      let ask = confirm("Are You Sure?")
      if(ask){
        try {
          console.log(payload);
          let res = await api.put('bugs/' + payload.id, {closed: payload.closed = true}, payload)
        } catch (error) {
          console.log(error)
        }
      }
    },



    async getNote({
      commit,
      dispatch
    }, bugId) {
      await api.get('bugs/' + bugId + '/notes')
        .then(res => {
          commit('setNotes', res.data)
          console.log(res.data);
        })
    },

    async addNote({
      commit,
      dispatch
    }, noteId) {
      console.log(noteId.bugId, "this from the store");
      await api.post('notes/', noteId)
        .then(serverBug => {
          dispatch('getNote', noteId.bugId)
        })
    },

    async deleteNote({commit,dispatch}, noteData){
      let ask = confirm("Are You Sure?")
      if(ask){
        let res = await api.delete('notes/' + noteData.id)
        dispatch('getNote', noteData.bugId)
      } else{
        return
      }
    }
  }
});
