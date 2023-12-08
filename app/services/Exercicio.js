import { API_URL_CADASTRAR_EXERCICIO } from "../util/consts";


export async function createExercicio(exercicio) {
    try {
        const response = await fetch(API_URL_CADASTRAR_EXERCICIO, {
            method: 'POST',
            body: JSON.stringify(exercicio),
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