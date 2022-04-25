import { createStore } from 'vuex'
import {
  fetchNewsList,
  fecthAskList,
  fecthJobsList,
  fetchUserList,
  fecthItemList
} from '../api/index'

export default createStore({
  state: {
    news: [],
    asks: [],
    jobs: [],
    user: [],
    item: []
  },
  getters: {
    // fecthedItem(state) {
    //   return state.item;
    // }
  }, 
  mutations: {
    SET_NEWS(state, payload) {
      state.news = payload;
    },
    SET_ASK(state, payload) {
      state.asks = payload;
    },
    SET_JOBS(state, payload) {
      state.jobs = payload;
    },
    SET_USER(state, payload) {
      state.user = payload
    },
    SET_ITEM(state, payload) {
      state.item = payload
    }
  },
  actions: {
    FETCH_NEWS({ commit }) {
      fetchNewsList()
        .then(response => {
          commit('SET_NEWS', response.data);
        })
        .catch(err => { console.log(err); })
    },
    FETCH_ASK({ commit }) {
      fecthAskList()
        .then((response) => {
        commit('SET_ASK', response.data)
        })
        .catch((err) => {
          console.log(err);
        })
    },
    FETCH_JOBS({ commit }) {  
      fecthJobsList()
        .then((response) => {
        commit('SET_JOBS', response.data)
        })
        .catch((err) => {
          console.log(err);
      })
    },
    FETCH_USER({ commit },name) {
      fetchUserList(name)
        .then((response) => {
         commit('SET_USER', response.data)
        })
      .catch(err => {console.log(err)})
    },
    FETCH_ITEM({ commit },item ) {
      fecthItemList(item)
        .then((response) => {
        commit('SET_ITEM', response.data)
        })
        .catch((err) => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
