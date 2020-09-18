<template>
  <div class="home">
    <h1>Welcome! this is coming from the home page</h1>
      <div class="row">
        <blog v-for="blog in blogs" :key="blog._id" :blogData="blog"/>
      </div>
    </div>
  </div>
</template>

<script>
import Blog from "../components/Blog.vue";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getAllBlogs");
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
