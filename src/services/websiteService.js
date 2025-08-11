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

export const sendContactMessage = async (contactData) => {
    try {
        const response = await axios.post(`${API_URL2}/solicitar/cotacto/`, contactData);
        console.log(contactData)
        return response.data;
    } catch (error) {
        console.log(contactData)
        console.error("Erro ao enviar o formulário:", error);
        throw error;
    }
};
