import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';
import { Asset } from 'expo-asset';

export async function initDatabase() {
    const documentDirectory = FileSystem.documentDirectory;
    const directoryPath = documentDirectory + 'SQLite';
    const databaseFilePath = documentDirectory + 'SQLite/herdeiros.db';

    const info = await FileSystem.getInfoAsync(directoryPath);
    if (!info.exists) {
        await FileSystem.makeDirectoryAsync(directoryPath);
    }

    const asset = Asset.fromModule(require('../assets/database/herdeiros.db'));
    await FileSystem.downloadAsync(asset.uri, databaseFilePath);

    try {
        // Tente abrir o banco de dados
        const db = SQLite.openDatabase('herdeiros.db');
        db.transaction((tx) => {
            // Verifica se a tabela "Usuario" existe
            tx.executeSql('SELECT * FROM Usuario;',[],(tx, result) => {
                    // Tabela "Usuario" foi criada ou já existe
                    alert('success');
                    console.info('Tabela "Usuario" verificada e pronta para uso.');
                    console.log(result.rows);
                    // Agora, você pode realizar outras operações com a tabela "Usuario" aqui
                },
                (_, error) => {
                    console.error('Erro ao verificar/criar a tabela "Usuario":', error);
                }
            );
        });
    } catch (error) {
        console.error('Erro ao abrir o banco de dados:', error);
    }
}

// Função para testar se o banco de dados existe e contém a tabela "Usuario"
// export async function testarBancoDeDados() {   
    // try {
    //     // Tente abrir o banco de dados
    //     const db = initDatabase();
    //     db.transaction((tx) => {
    //         // Verifica se a tabela "Usuario" existe
    //         tx.executeSql('SELECT * FROM Usuario;',[],() => {
    //                 // Tabela "Usuario" foi criada ou já existe
    //                 console.log('Tabela "Usuario" verificada e pronta para uso.');
    //                 // Agora, você pode realizar outras operações com a tabela "Usuario" aqui
    //             },
    //             (_, error) => {
    //                 console.error('Erro ao verificar/criar a tabela "Usuario":', error);
    //             }
    //         );
    //     });
    // } catch (error) {
    //     console.error('Erro ao abrir o banco de dados:', error);
    // }
// }
