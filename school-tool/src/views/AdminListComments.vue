<template>
   <div id="adminListComments">
    <h1>Admin</h1>
    <p>Número de Comentários: {{ getNumComments }}</p>
  </div>
</template>

<script>
export default {
name: 'AdminListComments',
computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
    getNumComments() {
      return this.$store.getters.getNumComments;
    }
  }
}
</script>

<style>

</style>