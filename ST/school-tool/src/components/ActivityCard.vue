<template>
  <div class="justify-content-center ">
    <b-container>
      <b-card
        v-if="activity.concluida == true"
        :title="activity.nome"
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
           <img class="img-fluid imgCard" :src="activity.imagem" alt="Activity Image" />
        <b-card-text>
          {{ getDescription }}
        </b-card-text>
        <b-card-text>
          <b>Data: </b> {{ activity.data_hora }}
        </b-card-text>
        <b-button @click="seeDetails" disabled variant="info" class="mr-2"
          >Ver Detalhes</b-button
        >
      </b-card>
      <b-card
        v-else
        :title="activity.nome"
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
       <img class="img-fluid imgCard" :src="activity.imagem" alt="Activity Image" />
        <b-card-text>
          {{ getDescription }}
        </b-card-text>
        <b-card-text>
          <b>Data: </b> {{ activity.data_hora}} 
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
      return this.activity.desc_atividade.length > 30
        ? this.activity.desc_atividade.substr(0, 30) + "..."
        : this.activity.desc_atividade;
    }
  },
  methods: {
    seeDetails() {
      
      this.$router.push({ name: "activity", params: { activityID: this.activity.idAtividade } });
    },
    
  }
};
</script>

<style>

.activitie_card {
  box-shadow: 0 0 10px #81790f;
  max-width: 50rem;
  max-height: auto;
}

.imgCard{
  width: 200px;
  height: 200px;
}
</style>
