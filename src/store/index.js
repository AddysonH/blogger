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
    },
    addBlog(state, blog) {
      state.blogs.push(blog)
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
        commit("setBlogs", res.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getActiveBlog({ commit }, id) {
      try {
        let res = await api.get("blogs/" + id)
        commit("setActiveBlog", res.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getCommentsById({ commit }, id) {
      try {
        let res = await api.get("blogs/:id/comments")
        commit("getCommentsById", res.data.data)
      } catch (error) {
        console.log(error)
      }
    },
    async createBlog({ commit }, newBlog) {
      try {
        let res = await api.post('blogs', newBlog)
        commit("addBlog", res.data)
        commit("setActiveBlog", res.data)
        router.push({ name: "blog-page", params: { id: res.data.data._id } })
      } catch (error) {
        console.log(error)
      }
    },
    async deleteBlog({ commit }, id) {
      try {
        await api.delete('blogs/' + id)
        commit("removeBlog", id)
        commit("setActiveBlog", {})
        router.push({ name: "Home" })
      } catch (error) {
        console.log(error)
      }
    }

  },

});
