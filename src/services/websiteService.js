import axios from "axios";

const API_URL2 = "https://api.v1.ourbiz.ao/api"

export const enviarFormularioWebsite = async (dados) => {
    try {
        const response = await axios.post(`${API_URL2}/solicitar/website`, dados);
        console.log(dados)
        return response.data;
    } catch (error) {
        console.log(dados)
        console.error("Erro ao enviar o formulário:", error);
        throw error;
    }
};

export const sendContactMessage = async (dados) => {
    try {
        const response = await axios.post(`${API_URL2}/contacto/`, dados);
        console.log(dados)
        return response.data;
    } catch (error) {
        console.log(dados)
        console.error("Erro ao enviar o formulário de contacto:", error);
        throw error;
    }
};

export const salvarPerfil = async (dados) => {
  try {
    const response = await axios.post(API_URL2, dados);
    return response.data;
  } catch (error) {
    console.error("Erro ao salvar perfil:", error);
    throw error;
  }
};

export const loginService = async (email, senha) => {
  try {
    const response = await axios.post(`${API_URL2}/auth/login`, {
      email,
      senha,
    });
    return response.data; 
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(
        error.response.data.detail || error.response.data.message || "Falha no login!"
      );
    }
    throw new Error("Erro ao conectar com o servidor.");
  }
};

export const register = async ({ nome_completo, email, telefone, senha }) => {
  try {
    const response = await axios.post(`${API_URL2}/usuario/`, {
      nome_completo,
      email,
      telefone: String(telefone),
      senha,
      tipo_usuario: "cliente"
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Erro API:", error.response.data);
      throw new Error(error.response.data.message || "Falha no registro!");
    }
    throw new Error("Erro ao conectar com o servidor.");
  }
};

export const enviarContacto = async (dados) => {
  return api.post(`${API_URL2}/contactos/`, dados);
};

export const enviarFormulario = async (dados) => {
    try {
        const response = await axios.post(`${API_URL2}/solicitar/servico/`, dados);
        console.log(dados)
        return response.data;
    } catch (error) {
        console.log(dados)
        console.error("Erro ao enviar o formulário:", error);
        throw error;
    }
};
