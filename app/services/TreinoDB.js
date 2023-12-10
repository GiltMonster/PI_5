import { API_URL_CADASTRAR_TREINO } from "../util/consts";

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