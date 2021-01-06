<template>
  <div id="adminHome">
    <h1>Admin</h1>
    <p>Número de users: {{ getNumUsers }}</p>
    <p>Número de Atividades: {{ getNumActivities }}</p>
    <p>Número de Comentários: {{ getNumComments }}</p>
  </div>
</template>

<script>
export default {
  name: "HomeAdmin",
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
    getNumUsers() {
      return this.$store.getters.getNumUsers;
    },
    getNumActivities() {
      return this.$store.getters.getNumActivities;
    },
    getNumComments() {
      return this.$store.getters.getNumComments;
    }
  }
};
</script>

<style></style>
