<template>
  <div>
    <h1>This is the Blog Page</h1>
    <!--v-if="blog._id"-->
    <div class="row text-center" v-if="blog._id">
      <div class="col-12">
        <p>{{blog.createdAt}}</p>
        <img :src="blog.creator.picture" alt />
        <div>
          <p class="mt-auto">{{blog.title}}</p>
        </div>
        <p>{{blog.body}}</p>
        <div>
          <button @click="deleteBlog">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog-page",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getActiveBlog", this.$route.params.id);
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog;
    },
  },
  methods: {
    deleteBlog() {
      this.$store.dispatch("deleteBlog", this.blog._id);
    },
  },
};
</script>

<style scoped>
</style>