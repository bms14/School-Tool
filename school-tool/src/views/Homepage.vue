<template>
  <div id="homepage">
      <h1>Authenticaded area</h1>
      <h2>Hello {{getUser}}</h2>
  </div>
</template>

<script>
export default {
    name: 'Homepage',
    computed: {
        getUser(){
            return this.$store.getters.getLoggedUser.name
        }
    }
}
</script>

<style>

</style>