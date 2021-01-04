<template>
  <h1>Forum</h1>
</template>

<script>
export default {
  name: "Forum",
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    }
  }
};
</script>

<style></style>