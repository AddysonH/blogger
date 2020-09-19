import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "../services/AxiosService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {},
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, blogs) {
      state.blogs = blogs
    },
    setActiveBlog(state, blog) {
      state.activeBlog = blog
    }
  },
  actions: {
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllBlogs({ commit }) {
      try {
        let res = await api.get("blogs");
        console.log(res)
        commit("setBlogs", res.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getActiveBlog({ commit }, id) {
      try {
        let res = await api.get("blogs/" + id)
        commit("setActiveBlog", res.data)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }

  },
});
