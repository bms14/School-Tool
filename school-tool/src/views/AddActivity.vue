<template>
  <div class="wrapper">
    <h2>Nova Atividade</h2>
    <form @submit.prevent="submitActivity">
      <div class="form-group">
        <label for="activityName">Nome:</label>
        <input
          v-model="name"
          type="text"
          class="input"
          id="activityName"
          required
        />
      </div>
      <br />
      <div class="form-group">
        <label for="activityType">Tipo: </label>
        <div class="custom_select">
          <select v-model="type" id="activityType" required>
            <option disabled value="">Selecione</option>
            <option
              :value="type"
              :key="i"
              v-for="(type, i) in this.$store.state.activityType"
            >
              {{ type }}
            </option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label for="activityLocal">Local: </label>
        <div class="custom_select">
          <select v-model="local" id="activityLocal" required>
            <option disabled value="">Selecione</option>
            <option :value="local" :key="i" v-for="(local, i) in this.$store.state.locals">
              {{ local }}
            </option>
          </select>
        </div>
      </div>
      <br />
      <div class="form-group">
        <label for="txtDate">Data:</label>
        <input type="date" id="txtDate" class="input" v-model="date" required />
      </div>
      <div class="form-group">
        <label for="txtHour">Horário:</label>
        <input
          type="time"
          id="txtHour"
          class="input"
          v-model="hour"
          min="09:00"
          max="19:30"
          required
        />
      </div>
      <br />
      <div class="form-group">
        <label for="activityNum">Número de participantes:</label><br />
        <input
          v-model="numPeople"
          type="number"
          class="input"
          id="activityNum"
          min="10"
          max="100"
          required
        />
      </div>
      <br />
      <div class="form-group certificate">
        <p>Tem direito a certificado?</p>
        <label class="check" for="certificate">
          <input type="radio" v-model="certificate" value="Sim" required /><span
            class="checkmark"
          ></span
        ></label>
        <p>Sim</p>
        <label class="check" for="certificate">
          <input type="radio" v-model="certificate" value="Não" /><span
            class="checkmark"
          ></span
        ></label>
        <p>Não</p>
      </div>
      <br />
      <div class="form-group">
        <label for="activityDescription">Descrição:</label>
        <textarea
          v-model="description"
          class="input"
          id="activityDescription"
          rows="4"
          required
        ></textarea>
      </div>
      <br />
      <div class="form-group">
        <label for="activityImage">Imagem ilustrativa: </label>
        <input type="url" class="input" id="activityImage" v-model="image" />
      </div>
      <br />
      <div class="form-group">
        <button type="submit" class="btn">Inserir</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "submitActivity",
  data() {
    return {
      id: this.$store.getters.getNextActivityId,
      name: "",
      type: "",
      local: "",
      date: null,
      hour: null,
      numPeople: null,
      certificate: "",
      description: "",
      image: "",
      concluded: false
    };
  },
  methods: {
    submitActivity() {
      try {
        //this.$store.dispacth("login",{username: this.username, password: this.password});
        this.$store.dispatch("submitActivity", this.$data);
        //saltar para a view home
        this.$router.push({ name: "Homepage" });
      } catch (error) {
        alert(error);
      }
    }
  },
  computed: {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #e9e9e9;
  padding: 0 10px;
}
.wrapper {
  max-width: 500px;
  width: 100%;
  background: #fff;
  margin: 50px auto;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.125);
  padding: 30px;
  border-radius: 25px;
}
.wrapper .h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 25px;
  color: #fec107;
  text-transform: uppercase;
  text-align: center;
}
.wrapper form {
  width: 100%;
}
.wrapper form .form-group {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}
.wrapper form .form-group label {
  width: 200px;
  color: #757575;
  margin-right: 10px;
  font-size: 14px;
}
.wrapper form .form-group .input,
.wrapper form .form-group .textarea {
  width: 100%;
  outline: none;
  border: 1px solid #d5dbd9;
  font-size: 15px;
  padding: 8px 10px;
  border-radius: 3px;
  transition: all 0.3s ease;
}
.wrapper form .form-group .textarea {
  width: 100%;
  height: 125px;
  resize: none;
}
.wrapper form .form-group .custom_select {
  position: relative;
  width: 100%;
  height: 37px;
}
.wrapper form .form-group .custom_select:before {
  content: "";
  position: absolute;
  top: 12px;
  right: 10px;
  border: 8px solid;
  border-color: #d5dbd9 transparent transparent transparent;
  pointer-events: none;
}
.wrapper form .form-group .custom_select select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  width: 100%;
  height: 100%;
  border: 0px;
  padding: 8px 10px;
  font-size: 15px;
  border: 1px solid #d5dbd9;
  border-radius: 3px;
}
.wrapper form .form-group .input:focus,
.wrapper form .form-group .textarea:focus,
.wrapper form .form-group .custom_select select:focus {
  border: 1px solid #fec107;
}
.wrapper form .form-group p {
  font-size: 14px;
  color: #757575;
}
.wrapper form .form-group .check {
  width: 15px;
  height: 15px;
  top: -10px;
  right: -10px;
  position: relative;
  display: block;
  cursor: pointer;
}
.wrapper form .form-group input[type="radio"]:checked:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -1px;
  left: -1px;
  position: relative;
  background-color: #ffa500;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}

.wrapper form .form-group .btn {
  width: 100%;
  padding: 8px 10px;
  font-size: 15px;
  border: 0px;
  background: #fec107;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
  outline: none;
}
.wrapper form .form-group .btn:hover {
  background: #ffd658;
}
.wrapper form .form-group:last-child {
  margin-bottom: 0;
}
@media (max-width: 420px) {
  .wrapper form .form-group {
    flex-direction: column;
    align-items: flex-start;
  }
  .wrapper form .form-group label {
    margin-bottom: 5px;
  }
  .wrapper form .form-group.certificate {
    flex-direction: row;
  }
}
</style>