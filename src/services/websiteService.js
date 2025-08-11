import axios from "axios";

export async function enviarFormularioWebsite(dados) {
  try {
    const response = await axios.post(
      "https://api.v1.ourbiz.ao/api/solitar",
      dados,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data; // Axios já retorna o JSON no .data
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    throw new Error("Erro ao enviar formulário");
  }
}

export const sendContactMessage = async (contactData) => {
  try {
    const response = await axios.post('https://api.v1.ourbiz.ao/api/solitar/cotacto', contactData);
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar mensagem de contato:', error);
    throw error;
  }
};
