<template>
  <div class="row justify-content-center">
    <div id="login" class="col-6">
      <form @submit.prevent="login">
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
        if (this.email == "admin" && this.password == "admin") {
          this.$store.dispatch("login", this.$data);
          this.$router.push({ name: "HomeAdmin" });
        } else {
          this.$store.dispatch("login", this.$data);
          this.$router.push({ name: "Homepage" });
        }
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style></style>
