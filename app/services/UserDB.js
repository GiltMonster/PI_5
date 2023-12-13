import { API_URL_CADASTRAR_USUARIO, API_URL_GET_USUARIO } from "../util/consts";

/**
 * Pega o usuário da API
 *
 * @export
 * @return {User} 
 */
export async function getUser() {
    try {
        const response = await fetch(API_URL_GET_USUARIO);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error; // Se desejar propagar o erro para quem chamou a função
    }
}

/**
 * this method will be used to save the user in the database
 *
 * @export
 * @param {usuario} usuariob
 * @return {*} 
 */
export async function cadastroUsuario(usuario) {
    try {
        console.log('usu',usuario);
        const response = await fetch(API_URL_CADASTRAR_USUARIO, {
            method: 'POST',
            body: JSON.stringify(usuario),
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