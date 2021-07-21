<template>
  <header class="masthead" v-bind:style="{ backgroundImage: `url('./assets/img/${this.backgroundImage}')` }">
    <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="site-heading">
            <h1>{{ title }}</h1>
            <span class="subheading" v-if="subtitle">{{ subtitle }}</span>
            <span class="meta" v-if="post">
                Posted by
                <a href="#" class="writer">{{ post.writer }}</a>
                on {{ post.date }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
module.exports = {
  name: "page-header",
  props: {
    title: String,
    subtitle: String,
    backgroundImage: {
      type: String,
      default: 'home-bg.jpg'
    },
    post: Object
  },
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style>
.writer {
  color: #fff !important;
}
</style>