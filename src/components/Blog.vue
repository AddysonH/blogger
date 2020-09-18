<template>
  <div class="row m-auto">
    <div class="card mt-3">
      <div class="card-header">{{blogData.creator.name}}</div>
      <div class="card-body">
        <img class="card-img-top" :src="blogData.imgUrl" alt />
        <h4 class="card-title">{{blogData.title}}</h4>
        <!--<p class="card-text">Text</p>-->
      </div>
      <!--<div class="card-footer text-muted">Footer</div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  props: {
    blogData: {
      type: Object,
      required: true,
    },
  },
};
</script>