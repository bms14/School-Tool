<template>
  <div id="adminListUser">
    <h1>Admin</h1>
    <p>Número de users: {{ getNumUsers }}</p>
  </div>
</template>

<script>
export default {
  name: "AdminListUser",
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
    getNumUsers() {
      return this.$store.getters.getNumUsers;
    },
  },
};
</script>
    
<style>
</style>