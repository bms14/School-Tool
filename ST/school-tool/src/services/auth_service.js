import API_URL from "./config.js";

export const AuthService = {
  async login(user) {
    // payload = user (username + password)
    const response = await fetch(`${API_URL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });
    if (response.ok) {
      const data = await response.json();
       console.log("LOGIN SERVICE OK")
       
      if (data.token) {localStorage.setItem("loggedUser", JSON.stringify(data));
    
    }
      return data;
    } else {
      throw Error(handleResponses(response.status));
    }
  },

  async logout() {
    localStorage.removeItem("loggedUser");
  },

  async register(user) {
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        nome: user.nome,
        email: user.email,
        idTipo:1,
        password: user.password,
        foto: user.foto,
        idCurso: user.idCurso,
        data_nasc: user.data_nasc,
        idNivel:1,
        pontuacao:100,
        blocked:"false",
      
        
      }),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw Error(handleResponses(response.status));
    }
  },
};

function handleResponses(code) {
  let message = "";
  switch (code) {
    case 400:
      message = "Username already exists.";
      break;
    case 401:
      message = "Wrong credentials";
      break;
    case 404:
      message = "User not found";
      break;
    default:
      message = "Unkown message";
      break;
  }
  return message;
}

export default AuthService;