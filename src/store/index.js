import { createStore } from 'vuex'
import { fetchNewsList, fecthAskList, fecthJobsList } from '../api/index'

export default createStore({
  state: {
    news: [],
    asks: [],
    jobs: []
  },
  getters: {
    // fecthedAsk(state) {
    //   return state.ask
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

    }
  },
  modules: {
  }
})
