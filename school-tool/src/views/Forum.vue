<template>
<div class="container">
  <div class="row justify-content-start">
    <div class="col-4">
      <table class="table" id="table">
        <thead id="thead">
          <tr>
            <th scope="col">Atividades</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <button type="button" id="button" class="btn btn-outline-dark">
              Workshop ##
            </button>
          </tr>
          <tr>
            <button type="button" id="button" class="btn btn-outline-dark">
              Workshop ##
            </button>
          </tr>
          <tr>
            <button type="button" id="button" class="btn btn-outline-dark">
              Workshop ##
            </button>
          </tr>
          <tr>
            <button type="button" id="button" class="btn btn-outline-dark">
              Workshop ##
            </button>
          </tr>
          <tr>
            <th scope="row" id="spacetosearch"></th>
          </tr>
          <tr>
            <input
              class="form-control me-2"
              id="search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-4">
      <h1>My First Bootstrap Page</h1>
        <p>
          This container has a dark background color and a white text, and some
          extra padding and margins.
        </p>
    </div>
  </div>
</div>
<!-- 
  <div class="row">
    <div class="container col-xs-6 .col-md-4" id="main-container">
      <table class="table" id="table">
        <thead id="thead">
          <tr>
            <th scope="col">Atividades</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <button type="button" id="button" class="btn btn-outline-dark">
              Workshop ##
            </button>
          </tr>
          <tr>
            <button type="button" id="button" class="btn btn-outline-dark">
              Workshop ##
            </button>
          </tr>
          <tr>
            <button type="button" id="button" class="btn btn-outline-dark">
              Workshop ##
            </button>
          </tr>
          <tr>
            <button type="button" id="button" class="btn btn-outline-dark">
              Workshop ##
            </button>
          </tr>
          <tr>
            <th scope="row" id="spacetosearch"></th>
          </tr>
          <tr>
            <input
              class="form-control me-2"
              id="search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-xs-12 col-md-8 bg-white text-black" id="message">
      <h1>My First Bootstrap Page</h1>
      <p>
        This container has a dark background color and a white text, and some
        extra padding and margins.
      </p>
    </div>
  </div>
  -->
</template>

<script>
export default {
  name: "Forum",
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
  },
};
</script>

<style>
#table {
  width: 250px;
  background-color: #b8b9b9;
}
#thead {
  background-color: #707071;
}
#spacetosearch {
  height: 200px;
}
#search {
  margin-left: 20px;
  background-color: white;
  width: 200px;
  border-radius: 25px 25px 25px 25px;
}
#button {
  width: 250px;
  border-top: 0px;
  border-end-end-radius: 0px;
  border-left: 0px;
  border-right: 0px;
  border-color: #707071;
}
#container-chat {
  background-color: blue;
}
</style>