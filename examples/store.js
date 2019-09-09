import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isShowSideBar: true
  },
  mutations: {
    toggleSideBar (state) {
      state.isShowSideBar = !state.isShowSideBar
    }
  }
})

export default store
