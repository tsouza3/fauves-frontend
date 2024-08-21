// src/services/transacoesService.js
import axios from "axios";

// Função para obter o token de autorização do cookie
const getAuthToken = () => {
    const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
    return token;
};

const consultarTransacoes = async (eventId) => {
    try {
        const token = getAuthToken(); 
        const response = await axios.get(`https://fauvesapi.thiagosouzadev.com/transacoes/${eventId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.cobrancasPagas;
    } catch (error) {
        console.error("Erro ao buscar transações:", error.message);
        throw error;
    }
};

export { consultarTransacoes };
