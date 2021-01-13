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
  <!-- <b-content>
    <b-container class="fill-height" fluid>
      <b-row align="center" juistify="center">
        <b-col cols="12" sm="8" md="8">
          <b-card class="elevation-12">
            <b-row>
              <b-col cols="12" md="8">
                <b-card-text class="mt-2">
                  <img class="text-center display-2 teal--text text--accent-3" src="https://picsum.photos/1600/480/?image=10">
                </b-card-text>
              </b-col>
            </b-row>

          </b-card>

        </b-col>

      </b-row> -->

  <!--   </b-container>
  </b-content>
 -->


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
