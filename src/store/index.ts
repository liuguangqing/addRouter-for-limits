import Vue from "vue";
import Vuex from "vuex";
import api from '@/service/api'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selfValue: '刘广庆',
    remoteRouteRefresh: true,
    menudata: JSON.parse(localStorage.getItem('menudata') || '{}'),
    token: sessionStorage.getItem('token') || ''
  },
  mutations: {
    set_Token (state, data) { // 半成品选中
      sessionStorage.setItem('token', data)
      state.token = data
    },
    set_remoteRouteRefresh (state, data) { // 半成品选中
      state.remoteRouteRefresh = data
    },
    set_menudata (state, data) {
      state.menudata = data
    }
  },
  actions: {
    getHomeUrl ({ state, getters }, data) {
      return api({} , {data, serviceCode: data.url})
    }
  },
  modules: {}
});
