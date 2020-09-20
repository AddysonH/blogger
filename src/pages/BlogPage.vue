<template>
  <div>
    <h1>This is the Blog Page</h1>
    <!--v-if="blog._id"-->
    <div class="row text-center">
      <div class="col-12" v-if="blog._id">
        <p>{{blog.createdAt}}</p>
        <img :src="blog.creator.picture" alt />
        <div>
          <p class="mt-auto">{{blog.title}}</p>
        </div>
        <p>{{blog.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog-page",
  mounted() {
    this.$store.dispatch("getActiveBlog", this.$route.params.id);
  },
  data() {
    return {};
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog;
    },
  },
};
</script>

<style scoped>
</style>