import { API_URL_CADASTRAR_EXERCICIO, API_URL_CADASTRA_DESCRICAO, API_URL_GET_DESCRICAO } from "../util/consts";
import { API_URL_GET_EXERCICIO_POR_TREINO } from "../util/consts";

export async function getExerciciosPeloTreino(id) {
    try {
        const response = await fetch(`${API_URL_GET_EXERCICIO_POR_TREINO}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error; // Se desejar propagar o erro para quem chamou a função
    }
}

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

// DESCRICAO DO EXERCICIO

export async function getDescricaoExercicio(){
    try {
        const response = await fetch(API_URL_GET_DESCRICAO);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error; // Se desejar propagar o erro para quem chamou a função
    }
}

export async function createDescricaoExercicio(descricaoExercicio){
    try {
        const response = await fetch(API_URL_CADASTRA_DESCRICAO, {
            method: 'POST',
            body: JSON.stringify(descricaoExercicio),
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