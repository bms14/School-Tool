import API_URL from './config.js'


function authHeader() {
    // checks Local Storage for user item
    let user = JSON.parse(localStorage.getItem('loggedUser'));
   
    

    // if there is a logged in user with accessToken (JWT)
    if (user && user.token) {
        // return HTTP authorization header for Node.js Express back-end
        return {
            'Content-Type': 'application/json',
            'x-access-token': user.token
        };
    } else {
        return { 'Content-Type': 'application/json' }; //otherwise, return an empty object
    }
}

export const ActivityService = {


    async fetchAllActivities() {
        const response = await fetch(`${API_URL}/activities`, {
            method: "GET",
            headers: authHeader()
        });
        if (response.ok) {
            let data = await response.json();
            // console.log("USER SERVICE - fetch ALL USERS")
           
            return data;
        } else {
            // console.log("USER SERVICE - fetch ALL USERS: ERROR ");
            // console.log(response)
            throw Error(handleResponses(response.status));
        }

    },
    async fetchOneActivity(activityID) {

        const response = await fetch(`${API_URL}/activities/${activityID}`, {
            method: "GET",
            headers: authHeader()
        });
        if (response.ok) {
            let data = await response.json();
            // console.log("USER SERVICE - fetch ALL USERS")
            console.log(data)
            return data;
        } else {
            // console.log("USER SERVICE - fetch ALL USERS: ERROR ");
            // console.log(response)
            throw Error(handleResponses(response.status));
        }

    },

    async fetchUpdateActivity(activity) {

      console.log(activity.name);

      const response = await fetch(`${API_URL}/activities/${activity.id}`, {
          method: "PUT",
          headers: authHeader(),

          body: JSON.stringify({
              nome: activity.name,
              desc_atividade: activity.description
             /*  description: activity.description, */
          }),
      });
      
      if (response.ok) {

          //update name of the user in localstorage
          let data = await response.json();
          return data;
      }
      else {
          throw Error(handleResponses(response.status));
      }
  },


    async newEnrollment(enrollment) {

       

        const response = await fetch(`${API_URL}/submissions`, {
          method: "POST",
          headers:
           
            authHeader(),

          body: JSON.stringify({
            id:enrollment.id,
            idUtilizador:enrollment.user,
            idAtividade:enrollment.activity,
            
            
          }),
        });
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          throw Error(handleResponses(response.status));
        }
      },
    
      async cancelEnrollment(enrollment) {

       

        const response = await fetch(`${API_URL}/submissions/`, {
          method: "DELETE",
          headers:
           
            authHeader(),

          body: JSON.stringify({
            idUtilizador:enrollment.user,
            idAtividade:enrollment.activity,
            
            
          }),
        });
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          throw Error(handleResponses(response.status));
        }
      },

      async fetchDeleteActivity(activityID) {

            
        const response = await fetch(`${API_URL}/activities/${activityID}`, {
            method: "DELETE",
            headers:authHeader()
        });
        if (response.ok) {
            let data = await response.json();
            return data;
        }
        else {
            throw Error(handleResponses(response.status));
        }
    },

    async createActivity(activity) {
        console.log(activity);
        const response = await fetch(`${API_URL}/activities`, {
          method: "POST",
          headers: authHeader(),
          body: JSON.stringify({
            nome: activity.nome,
            desc_atividade: activity.desc_atividade,
            num_participantes: activity.num_participantes,
            imagem: activity.imagem,
            certificado_SN:activity.certificado_SN,
            data_hora: activity.data_hora,
            idLocal: activity.idLocal,
            idCategoria: activity.idCategoria,
            concluida: "false"
        
          
            
          }),
        });
        if (response.ok) {
            const data = await response.json();
            return data;
          } else {
            throw Error(handleResponses(response.status));
          }
        },

    async getPublicContent() {
        // return axios.get(API_URL);
        const response = await fetch(`${API_URL}`, {
            method: "GET" // requires NO authorization header
        });
        if (response.ok) {
            let data = await response.json();
            // console.log("USER SERVICE - fetch WELCOMING MESSAGE")
            // console.log(data) // data = "Welcome to the TUTORIALS api"
            return data;
        } else
            throw Error(handleResponses(response.status));
    }

}

export default ActivityService;


function handleResponses(code) {
    let message = "";
    switch (code) {
        case 401:
            message = "Not allowed to executed this action!";
            break;
        case 403:
            message = "Forbidden access";
            break;
        default:
            message = "Unkown message";
            break;
    }
    return message;
}