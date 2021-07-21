<template>
  <div>
    <page-header title="Cara Menambahkan video pada Website Anda"
                 subtitle="Cara mudah menambahkan video pada halaman website"
                 background-image="html-bg.jpg" :post="{writer: 'Admin', date:'July 17, 2021'}">
    </page-header>
    <page-content content="post-html-video"></page-content>
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
    eventBus.$emit('set-page-title', 'Cara Menambahkan video pada Website Anda');
  }
}
</script>

<style scoped>

</style>