<template>
  <div>
    <page-header title="Cara Membuat List HTML"
                 subtitle="List HTML memungkinkan developer web untuk mengelompokkan satu set item terkait dalam daftar."
                 background-image="html-bg.jpg" :post="{writer: 'Admin', date:'July 21, 2021'}">
    </page-header>
    <page-content content="post-html-list"></page-content>
  </div>
</template>

<script>
module.exports =  {
  name: "post-html-list",
  components: {
    'page-header': httpVueLoader('./../vue/components/page-header.vue'),
    'page-content': httpVueLoader('./../vue/components/page-content.vue'),
  },
  created() {
    eventBus.$emit('set-page-title', 'Cara Membuat List HTML');
  }
}
</script>

<style scoped>

</style>