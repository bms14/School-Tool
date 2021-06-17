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

export const QuizzService = {


    async fetchAllQuizzes() {
        const response = await fetch(`${API_URL}/quizzes`, {
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
    async fetchOneQuiz(quizID) {

        const response = await fetch(`${API_URL}/quizzes/${quizID}`, {
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


    async concludedQuiz(quiz) {

       console.log(quiz.user);
       console.log(quiz.quiz);

        const response = await fetch(`${API_URL}/submissions/historico`, {
          method: "POST",
          headers:
           
            authHeader(),

          body: JSON.stringify({
            idUtilizador:quiz.user,
            idQuiz:quiz.quiz,
            
            
          }),
        });
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          throw Error(handleResponses(response.status));
        }
      },

      async fetchDeleteQuiz(quizID) {

            
        const response = await fetch(`${API_URL}/quizzes/${quizID}`, {
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
    
    async createQuiz(quiz) {
        const response = await fetch(`${API_URL}/quizzes`, {
          method: "POST",
          headers: authHeader(),
          body: JSON.stringify({
            tema: quiz.tema,
            desc_quiz: quiz.desc_quiz,
            pergunta: quiz.pergunta,
            resposta1: quiz.resposta1,
            resposta2: quiz.resposta2,
            resposta3: quiz.resposta3,
            resposta4: quiz.resposta4,
            resposta_certa: quiz.resposta_certa,
            imagem: quiz.imagem,
        
          
            
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
    },


    

}






export default QuizzService;


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