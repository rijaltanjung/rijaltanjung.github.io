<template>
  <div class="d-flex justify-content-start mb-4">
    <button class="btn btn-primary text-uppercase" @click="goBack">&#8592; Back</button>
  </div>
</template>

<script>
module.exports = {
  name: "page-button-back",
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },
}
</script>

<style scoped>

</style>