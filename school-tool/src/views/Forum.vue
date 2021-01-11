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
      <div
        class="col-6 bg-white text-black"
        style="border: 3px solid #cecece"
        id="chat"
      >
        <p id="message">Local onde entra a primeira mensagem</p>
        <div class="row">
          <div class="mb-3">
            <form class="d-flex" @submit.prevent="sendComment()">
              <input
                class="form-control me-2"
                type="search"
                id="txtComment"
                placeholder="Deixar comentário do workshop"
                v-model="form.comment"
              />
              <button class="btn btn-outline-dark" type="submit">
                <ion-icon name="navigate"></ion-icon>
              </button>
            </form>
            <form class="d-flex">
              <ion-icon id="icon1" name="document-attach"></ion-icon>
              <ion-icon id="icon2" name="happy"></ion-icon>
            </form>
          </div>
        </div>
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
  data: function () {
    return {
      comment: [],
      filterName: "",
      form: {
        id: "",
        comment: "",
      },
    };
  },
  methods: {
    sendComment() {
      this.form.id = this.getLoggedUser.id;
      this.$store.commit("New_Comment", {
        id: this.form.id,
        comment: this.form.comment,
      });
    },
  },
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
    filteredUsers() {
      if (!this.filterName) {
        return this.$store.state.users;
      } else {
        return this.$store.state.users.filter((user) =>
          user.name.includes(this.filterName)
        );
      }
    },
  },
};
</script>

<style>
#table {
  width: 250px;
  background-color: #b8b9b9;
  border-radius: 15px 15px 15px 15px;
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
#chat {
  border-radius: 15px 15px 15px 15px;
  margin: 0;
  padding: 0;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
#message {
  margin-bottom: auto;
}
#icon1 {
  margin-left: 20px;
}
#icon2 {
  margin-left: 10px;
}
</style>