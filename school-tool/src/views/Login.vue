<template>
<div class="row justify-content-center">
  <div id="login" class="col-6">
    <form @submit.prevent="login ">
      <label for="txtEmail">Email: </label>
      <input
        type="text"
        class="form-control"
        id="txtEmail"
        placeholder="Introduza o Email"
        v-model="email"
      />
      <label for="txtPassword">Password: </label>
      <input
        type="password"
        class="form-control"
        id="txtPassword"
        placeholder="Introduza a Password"
        v-model="password"
      /><br />
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      try {
        //chamar a ação login que está na store
        //this.$store.dispacth("login",{username: this.username, password: this.password});
        this.$store.dispatch("login", this.$data);
        //saltar para a view homepage  
        this.$router.push({ name: "Homepage" });
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style></style>
