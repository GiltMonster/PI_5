import { API_URL_ATUALIZAR_TREINO, API_URL_CADASTRAR_TREINO, API_URL_GET_TREINO } from "../util/consts";

export async function getTreinos() {
    try {
        const response = await fetch(API_URL_GET_TREINO);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error; // Se desejar propagar o erro para quem chamou a função
    }
}

/**
 * This method will be used to save the treino
 *
 * @export
 * @param {*} treino
 * @return {*} 
 */
export async function createTreino(treino) {
    try {
        const response = await fetch(API_URL_CADASTRAR_TREINO, {
            method: 'POST',
            body: JSON.stringify(treino),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error; // Se desejar propagar o erro para quem chamou a função
    }
}

export async function atualizaTreino(treino, idtreino) {
    try {
        // Fazendo a requisição usando fetch e esperando pela resposta
        const response = await fetch(`${API_URL_ATUALIZAR_TREINO}/${idtreino}`, {
            method: 'PUT',
            body: JSON.stringify(treino),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Verifica se a requisição foi bem-sucedida (código de status no intervalo 200-299)
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }

        // Se tudo estiver bem, retorna a resposta como JSON
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error; // Lança o erro novamente para que possa ser tratado pelo chamador
    }
} 