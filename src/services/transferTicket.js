import axios from "axios";

export const transferTicketService = async (email, uniqueTicketId, ticketId) => {
    const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );

    try {
        const response = await axios.post(
            'https://fauvesapi.thiagosouzadev.com/api/users/transfer',
            {
                email,
                uniqueTicketId,
                ticketId,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Erro ao transferir ingresso');
    }
};
