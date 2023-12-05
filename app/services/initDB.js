import { API_URL_GET_USUARIO } from "../util/consts";

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

// export async function getUser() {

// //Aqui ele vai, verificar os diretórios de arquivos no dispositivo, caso
//     const documentDirectory = FileSystem.documentDirectory;
//     const directoryPath = documentDirectory + 'SQLite';
//     const databaseFilePath = documentDirectory + 'SQLite/herdeiros.db';

//     const info = await FileSystem.getInfoAsync(directoryPath);
//     if (!info.exists) {
//         await FileSystem.makeDirectoryAsync(directoryPath);
//     }

//     const asset = Asset.fromModule(require('../assets/database/herdeiros.db'));
//     await FileSystem.downloadAsync(asset.uri, databaseFilePath);

//     try {
//         // Tente abrir o banco de dados
//         const db = SQLite.openDatabase('herdeiros.db');
//         db.transaction((tx) => {
//             // Verifica se a tabela "Usuario" existe
//             tx.executeSql('SELECT * FROM Usuario;', [], (_, result) => {
//                 result.rows._array.map((item) => {
//                     return item;
//                 })
//             }, (_, error) => {
//                 console.error('Erro ao verificar/criar a tabela "Usuario":', error);
//             }
//             );
//         });
//     } catch (error) {
//         console.error('Erro ao abrir o banco de dados:', error);
//     }
// }
