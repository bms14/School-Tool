<template>
 
    <div class="row ">
        <div class="col-sm-4">
            
      <div class="card " style="width: 18rem">
        <img class="card-img-top" :src="activity.image" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{{ activity.name }}</h5>
          <p class="card-text">{{ getDescription }}</p>
          <p class="card-text"><b>Data: </b>{{ activity.date }}</p>
          <p class="card-text"><b>Hora: </b>{{ activity.hour }}</p>
          <button @click="seeDetails" class="btn btn-primary">
            Ver detalhes
          </button>
                </div>
            </div>
        </div>
        </div>
        
</template>

<script>
export default {
  name: "ActivityCard",
  props: {
    activity: Object,
  },
  computed: {
    getDescription() {
      return this.activity.description.length > 30
        ? this.activity.description.substr(0, 30) + "..."
        : this.activity.description;
    },
  },
  methods: {
    seeDetails() {
      this.$router.push({ name: "activity", params: { id: this.activity.id } });
    },
  },
};
</script>

<style>
</style>