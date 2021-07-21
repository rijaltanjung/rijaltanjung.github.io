<template>
  <main class="mb-4" v-if="content.includes('post') === false">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <content-index v-if="content === 'index'"></content-index>
          <content-about v-else-if="content === 'about'"></content-about>
          <content-contact v-else-if="content === 'contact'"></content-contact>
          <content-post-1 v-else-if="content === 'post-1'"></content-post-1>
        </div>
      </div>
    </div>
  </main>
  <article class="mb-4" v-else>
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <content-post-1 v-if="content === 'post-1'"></content-post-1>
          <content-post-html-video v-else-if="content === 'post-html-video'"></content-post-html-video>
          <content-post-html-audio v-else-if="content === 'post-html-audio'"></content-post-html-audio>
          <content-post-html-form v-else-if="content === 'post-html-form'"></content-post-html-form>
          <content-post-html-list v-else-if="content === 'post-html-list'"></content-post-html-list>
          <page-button-back></page-button-back>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
module.exports = {
  name: "page-content",
  props: {
    content: String,
  },
  data() {
    return {
      index: 'content-index.vue'
    }
  },
  components: {
    'page-button-back': httpVueLoader(`./../components/page-button-back.vue`),
    'content-index': httpVueLoader(`./../contents/content-index.vue`),
    'content-about': httpVueLoader(`./../contents/content-about.vue`),
    'content-contact': httpVueLoader(`./../contents/content-contact.vue`),
    'content-post-1': httpVueLoader(`./../contents/content-post-1.vue`),
    'content-post-html-video': httpVueLoader(`./../contents/content-post-html-video.vue`),
    'content-post-html-audio': httpVueLoader(`./../contents/content-post-html-audio.vue`),
    'content-post-html-form': httpVueLoader(`./../contents/content-post-html-form.vue`),
    'content-post-html-list': httpVueLoader(`./../contents/content-post-html-list.vue`),
  }
}
</script>

<style scoped>

</style>