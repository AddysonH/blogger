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
        <div>
          <!-- <comment v-for="comment in comments" :key="blog._id" :blogData="blog" />-->
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
    // this.$store.dispatch("getCommentsById", this.$route.params.id);
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog;
    },
    // comments() {
    // return this.$store.state.getCommentsById;
    //},
  },
  methods: {
    deleteBlog() {
      this.$store.dispatch("deleteBlog", this.blog._id);
    },
  },
  // components: {
  //   comment,
  // },
};
</script>

<style scoped>
</style>