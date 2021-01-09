<template>
  <div id="adminListActivities">
    <h1>Admin</h1>
    <p>Número de Atividades: {{ getNumActivities }}</p>
  </div>
</template>

<script>
export default {
  name: "AdminListActivities",
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
    getNumActivities() {
      return this.$store.getters.getNumActivities;
    }
  }
};
</script>

<style>
</style>