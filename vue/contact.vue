<template>
  <div>
    <page-header title="Contact Me" subtitle="Have questions? I have answers." background-image="contact-bg.jpg">
    </page-header>
    <page-content content="contact"></page-content>
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
    eventBus.$emit('set-page-title', 'How To - Contact Me');
  }
}
</script>

<style scoped>

</style>