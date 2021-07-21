<template>
  <div>
    <page-header title="Man must explore, and this is exploration at its greatest"
                 subtitle="Problems look mighty small from 150 miles up"
                 background-image="post-bg.jpg" :post="{writer: 'Admin', date:'July 17, 2021'}">
    </page-header>
    <page-content content="post-1"></page-content>
  </div>
</template>

<script>
module.exports =  {
  name: "post-1",
  components: {
    'page-header': httpVueLoader('./../vue/components/page-header.vue'),
    'page-content': httpVueLoader('./../vue/components/page-content.vue'),
  },
  created() {
    eventBus.$emit('set-page-title', 'Man must explore, and this is exploration at its greatest');
  }
}
</script>

<style scoped>

</style>