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
export const UserService = {
    async fetchOneUserByID(id) {

        const response = await fetch(`${API_URL}/users/${id}`, {
            method: "GET",
            headers: authHeader()
        });
        if (response.ok) {

            let data = await response.json();
            // console.log("USER SERVICE - fetch 1 USER")

            return data;

        }
        else {
            // console.log("USER SERVICE - fetch 1 USER")
            // console.log(response)
            throw Error(handleResponses(response.status));
        }
    },

    async fetchAllUsers() {
        // console.log(" USER SERVICE - fetch ALL USERS started...")
        // return axios.get(API_URL + 'admin', { headers: authHeader() });
        const response = await fetch(`${API_URL}/users`, {
            method: "GET",
            headers: authHeader()
        });
        if (response.ok) {
            let data = await response.json();
            // console.log("USER SERVICE - fetch ALL USERS")
            // console.log(data)
            return data;
        } else {
            // console.log("USER SERVICE - fetch ALL USERS: ERROR ");
            // console.log(response)
            throw Error(handleResponses(response.status));
        }

    },
    async fetchUpdateUser(user) {

        console.log(user.password);
        console.log(user.foto);

        console.log(user);

        const response = await fetch(`${API_URL}/users/${user.id}`, {
            method: "PUT",
            headers: authHeader(),

            body: JSON.stringify({
                password: user.password,
                foto: user.foto,
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


    async fetchUpdateUserAdmin(user) {



        console.log(user.id);
        console.log(user.nome);
        console.log(user.email);
        console.log(user.idCurso);
        console.log(user.data_nasc);

        const response = await fetch(`${API_URL}/users/${user.id}`, {
            method: "PUT",
            headers: authHeader(),

            body: JSON.stringify({
                id:user.id,
                name: user.nome,
                email: user.email,
                course: user.idCurso,
                birthDate: user.data_nasc,
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


    async fetchDeleteUser(userID) {

            
        const response = await fetch(`${API_URL}/users/${userID}`, {
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



    // sends request to API root
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

export default UserService;


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