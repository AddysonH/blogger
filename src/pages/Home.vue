<template>
  <div class="home">
    <h1>Welcome! this is coming from the home page</h1>
    <h3>Create a Blog</h3>
    <form @submit.prevent="createBlog">
      <div class="form-group">
        <input type="text" v-model="newBlog.title" placeholder="Title" />
        <input type="text" v-model="newBlog.picture" alt="A Pic of me" placeholder="Picture" />
        <input type="text" v-model="newBlog.body" placeholder="Body" />
      </div>
      <button type="submit">submit</button>
    </form>
    <div class="row">
      <blog v-for="blog in blogs" :key="blog._id" :blogData="blog" />
    </div>
  </div>
</template>

<script>
import Blog from "../components/Blog";
export default {
  name: "home",
  data() {
    return {
      newBlog: {},
    };
  },
  mounted() {
    this.$store.dispatch("getAllBlogs");
  },
  methods: {
    createBlog() {
      this.$store.dispatch("createBlog", this.newBlog);
      for (let key in this.newBlog) {
        this.newBlog[key] = null;
      }
    },
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
  },

  components: {
    Blog,
  },
};
</script>
