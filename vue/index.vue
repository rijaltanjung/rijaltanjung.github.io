<template>
  <div>
    <page-header title="How To" subtitle="Belajar belum pernah semudah ini !"></page-header>
    <page-content content="index"></page-content>
  </div>
</template>

<script>
module.exports = {
  name: "index",
  components: {
    'page-header': httpVueLoader('./../vue/components/page-header.vue'),
    'page-content': httpVueLoader('./../vue/components/page-content.vue'),
  },
  created() {
    eventBus.$emit('set-page-title', 'How To - A Place To Learn Something New');
  }
}
</script>

<style scoped>

</style>