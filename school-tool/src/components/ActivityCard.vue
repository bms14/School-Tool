<template>
  <div class="justify-content-center">
    <b-container>
      <b-card
        v-if="activity.concluded == true"
        :title="activity.name"
        :img-src="activity.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-4"
      >
        <b-card-text>
          {{ getDescription }}
        </b-card-text>
        <b-card-text>
          <b>Data: </b> {{ activity.date }} <b> Hora: </b> {{ activity.hour }}
        </b-card-text>
        <b-button @click="seeDetails" disabled variant="info" class="mr-2"
          >Ver Detalhes</b-button
        >
      </b-card>
      <b-card
        v-else
        :title="activity.name"
        :img-src="activity.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-4"
      >
        <b-card-text>
          {{ getDescription }}
        </b-card-text>
        <b-card-text>
          <b>Data: </b> {{ activity.date }} <b> Hora: </b> {{ activity.hour }}
        </b-card-text>
        <b-button @click="seeDetails" variant="info" class="mr-2"
          >Ver Detalhes</b-button
        >
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ActivityCard",
  props: {
    activity: Object
  },
  computed: {
    getDescription() {
      return this.activity.description.length > 30
        ? this.activity.description.substr(0, 30) + "..."
        : this.activity.description;
    }
  },
  methods: {
    seeDetails() {
      this.$router.push({ name: "activity", params: { id: this.activity.id } });
    }
  }
};
</script>

<style></style>
