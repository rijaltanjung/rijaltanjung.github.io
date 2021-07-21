<template>
  <div>
    <page-header title="Cara Menambahkan Audio pada Halaman Website Anda"
                 subtitle="Cara mudah menambahkan audio pada website"
                 background-image="html-bg.jpg" :post="{writer: 'Admin', date:'July 17, 2021'}">
    </page-header>
    <page-content content="post-html-audio"></page-content>
  </div>
</template>

<script>
module.exports =  {
  name: "post-html-video",
  components: {
    'page-header': httpVueLoader('./../vue/components/page-header.vue'),
    'page-content': httpVueLoader('./../vue/components/page-content.vue'),
  },
  created() {
    eventBus.$emit('set-page-title', 'Cara Menambahkan Audio pada Halaman Website Anda');
  }
}
</script>

<style scoped>

</style>