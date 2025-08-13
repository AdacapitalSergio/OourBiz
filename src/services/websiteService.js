import axios from "axios";

const API_URL2 = "https://api.v1.ourbiz.ao/api"

export const enviarFormularioWebsite = async (dados) => {
    try {
        const response = await axios.post(`${API_URL2}/solicitar/`, dados);
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
