<template>
  <div>
      <page-header title="About Me" subtitle="This is what I do." background-image="about-bg.jpg"></page-header>
      <page-content content="about"></page-content>
  </div>
</template>

<script>
module.exports = {
  name: "about",
  components: {
    'page-header': httpVueLoader('./../vue/components/page-header.vue'),
    'page-content': httpVueLoader('./../vue/components/page-content.vue'),
  },
  created() {
    eventBus.$emit('set-page-title', 'How To - About');
  }
}
</script>

<style scoped>

</style>