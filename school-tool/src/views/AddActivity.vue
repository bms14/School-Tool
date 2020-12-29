<template>
  <div>
    <h2>Inserir Nova Atividade</h2>
    <div class="row justify-content-center">
      <form class="col-6">
        <div class="form-group">
          <label for="activityName">Nome:</label><br />
          <input
            v-model="new_activity.name"
            type="text"
            class="form-control"
            id="activityName"
            required
          />
        </div>
        <div class="form-group">
          <label for="activityType">Tipo:</label><br />
          <select v-model="new_activity.type" id="activityType">
            <option :value="type" :key="i" v-for="(type, i) in types">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="activityLocal">Local:</label><br />
          <select v-model="new_activity.local" id="activityLocal">
            <option :value="local" :key="i" v-for="(local, i) in locals">
              {{ local }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="txtDate">Data:</label>
          <input
            type="date"
            id="txtDate"
            class="form-control"
            v-model="new_activity.date"
            required
          /><br />
        </div>
        <div class="form-group">
          <label for="txtHour">Horário:</label>
          <input
            type="time"
            id="txtHour"
            class="form-control"
            v-model="new_activity.hour"
            min="09:00"
            max="19:30"
            required
          /><br />
        </div>

        <div class="form-group">
          <label for="activityNum">Número de participantes:</label><br />
          <input
            v-model="new_activity.numPeople"
            type="number"
            class="form-control"
            id="activityNum"
            min="10"
            max="100"
          />
        </div>
        <br />
        <div class="form-group">
          <label for="certificate">Tem direito a certificado?</label><br />
          <input type="radio" name="certificate" value="Sim" /> Sim
          <input type="radio" name="certificate" value="Não" /> Não<br />
        </div>
        <br />
        <div class="form-group">
          <label for="activityDescription">Descrição:</label><br />
          <textarea
            v-model="new_activity.description"
            class="form-control"
            id="activityDescription"
            rows="4"
          ></textarea>
        </div>
        <br />
        <div class="form-group">
          <label for="activityImage">Imagem ilustrativa:</label><br />
          <input
            type="file"
            class="form-control-file"
            id="activityImage"
            name="img"
            accept="image/*"
          />
        </div>
        <br />
        <button type="submit" @click="submitActivity" class="btn btn-primary">
          Inserir
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddActivity",
  data() {
    return {
      types: ["Conferência", "Workshop", ""],
      locals: ["ESMAD", "Online"],
      new_activity: {
        id: 0,
        name: "",
        type: "",
        local: "",
        date: null,
        hour: null,
        numPeople: null,
        certificate:  document.querySelector('input[name="certificate"]:checked').value,
        description: "",
        image: "",
      },
    };
  },
  methods: {
    submitActivity(event) {
      event.preventDefault();

      let activities = [];
      if (localStorage.getItem("activities"))
        activities = JSON.parse(localStorage.getItem("activities"));

      this.new_activity.id =
        activities.length > 0 ? activities[activities.length - 1].id + 1 : 1;

      activities.push(this.new_activity);
      localStorage.setItem("activities", JSON.stringify(activities));
      alert("Atividade inserida com sucesso!");

      this.new_activity = {
        id: 0,
        name: "",
        type: "",
        local: "",
        date: null,
        hour: null,
        numPeople: null,
        certificate: document.querySelector('input[name="certificate"]:checked').value,
        description: "",
        image: "",
      };
    },
  },
};
</script>

<style>
</style>