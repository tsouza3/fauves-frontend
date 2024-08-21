// src/services/eventService.js

export const getUsersByRole = async (eventId) => {
    const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );

    try {
        const response = await fetch(`https://fauvesapi.thiagosouzadev.com/api/users/role/${eventId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar usuários do evento');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar usuários do evento:", error);
        throw error;
    }
};
