<template>
  <div>
    <page-header title="Cara Membuat Form HTML"
                 subtitle="Form HTML pada halaman website memungkinkan user untuk mengirim data ke server untuk di proses"
                 background-image="html-bg.jpg" :post="{writer: 'Admin', date:'July 21, 2021'}">
    </page-header>
    <page-content content="post-html-form"></page-content>
  </div>
</template>

<script>
module.exports =  {
  name: "post-html-form",
  components: {
    'page-header': httpVueLoader('./../vue/components/page-header.vue'),
    'page-content': httpVueLoader('./../vue/components/page-content.vue'),
  },
  created() {
    eventBus.$emit('set-page-title', 'Cara Membuat Form HTML');
  }
}
</script>

<style scoped>

</style>