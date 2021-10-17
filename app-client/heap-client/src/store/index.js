import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:{
      detail: JSON.parse(window.localStorage.getItem("user")),
      tokens: JSON.parse(window.localStorage.getItem("tokens")),
    }
    
  },
  mutations: {
    setUser(state, value) {
      this.state.user.detail = value;
      window.localStorage.setItem("user", JSON.stringify(value));
    },
    setLogout() {
      this.state.user.detail = undefined;
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("tokens");
    },
    setToken(state, value) {
      this.state.user.tokens = value;
      window.localStorage.setItem("tokens", JSON.stringify(value));
    },
  },
  actions: {
    setUser(context, value) {
      context.commit("setUser", value);
    },
    logout(context) {
      context.commit("setLogout");
    },
    setToken(context, value) {
      context.commit("setToken", value);
    },
  },
  modules: {},
});
