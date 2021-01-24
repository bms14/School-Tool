<template>
  <div id="content" class="forum">
    <b-container>
      <b-row>
        <b-container class="col-md-4">
          <table class="table" id="table">
            <thead id="thead" style="background-color: #707071">
              <tr>
                <th scope="col">Atividades</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="activity in filteredActivities" :key="activity.id">
                <b-button type="button" id="button" variant="dark">
                  {{ activity.name }}
                </b-button>
              </tr>
              <tr>
                <th scope="row" id="spacetosearch"></th>
              </tr>
              <tr>
                <b-input-group class="col-sm">
                  <b-form-input
                    type="text"
                    id="search"
                    placeholder="Pesquise..."
                    v-model="filterActivity"
                  >
                  </b-form-input>
                </b-input-group>
              </tr>
            </tbody>
          </table>
        </b-container>
        <b-container
          class="col-md-6 bg-white text-black"
          style="border: 3px solid #cecece"
          id="chat"
        >
          <b-row class="mb-3">
            <b-form class="d-flex" @submit.prevent="sendComment()">
              <b-input-group class="col-md-10">
                <b-form-input
                  type="text"
                  id="txtComment"
                  placeholder="Deixar comentário do workshop"
                  v-model="form.comment"
                >
                </b-form-input>
              </b-input-group>
              <b-button variant="dark" type="submit">
                <ion-icon name="navigate"></ion-icon>
              </b-button>
            </b-form>
          </b-row>
          <b-row class="mb-3">
            <form class="d-flex">
              <ion-icon id="icon1" name="document-attach"></ion-icon>
              <ion-icon id="icon2" name="happy"></ion-icon>
            </form>
          </b-row>
        </b-container>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Forum",
  data() {
    return {
      filterActivity: "",
      comments: [],
      activities: [],
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
      return this.$store.state.getLoggedUser;
    },
    getActivities() {
      return this.$store.state.activities;
    },
    filteredActivities() {
      if (!this.filterActivity) {
        return this.$store.state.activities;
      } else {
        return this.$store.state.activities.filter((activity) =>
          activity.name
            .toLowerCase()
            .includes(this.filterActivity.toLowerCase())
        );
      }
    },
    getComment() {
      return this.$store.state.comments;
    },
  },
  created() {
    let activities = [];
    if (localStorage.getItem("activities")) {
      activities = JSON.parse(localStorage.getItem("activities"));
    }
    this.activity = activities.find((g) => g.id == this.$route.params.id);
    console.log(this.activity);
  },
};
</script>

<style>
#content.forum {
  padding-top: 70px;
  background-color: #dcdcdc;
  min-height: 100vh;
}
#table {
  width: 250px;
  background-color: #b8b9b9;
  border-radius: 15px 15px 15px 15px;
}
#spacetosearch {
  height: 200px;
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