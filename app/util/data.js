/**
 * Pega o dia da semana atual e retorna o dia da semana seguinte, np padrão: YYYY-MM-DDTHH:mm:ss.
 *
 * @export
 * @param {string} diaDaSemana
 * @return {string} 
 */
export function obterDataFormatada(diaDaSemana) {
    // Mapeia os dias da semana para seus respectivos índices (0 para Domingo, 1 para Segunda-feira, etc.)
    const diasDaSemana = {
        'Domingo': 0,
        'Segunda-feira': 1,
        'Terça-feira': 2,
        'Quarta-feira': 3,
        'Quinta-feira': 4,
        'Sexta-feira': 5,
        'Sábado': 6
    };

    // Obtém o índice do dia da semana fornecido
    const indiceDia = diasDaSemana[diaDaSemana];

    // Obtém a data atual
    const dataAtual = new Date();

    // Calcula a diferença entre o índice do dia fornecido e o índice do dia atual
    const diferencaDias = indiceDia - dataAtual.getDay();

    // Adiciona a diferença ao objeto Date para obter a data do próximo dia fornecido
    dataAtual.setDate(dataAtual.getDate() + diferencaDias);

    // Formata a data no formato desejado (YYYY-MM-DDTHH:mm:ss)
    const dataFormatada = dataAtual.toISOString().slice(0, 19);

    console.log('Data formatada:', dataFormatada);
    return dataFormatada;
}
/**
 * Obtém uma string contendo uma data no formato "2023-12-12T05:27:30.000Z" e retorna o dia da semana correspondente.
 *
 * @export
 * @param {string} dataString
 * @return {string} 
 */
export function obterDiaDaSemana(dataString) {
    // Cria um objeto Date com base na string de data fornecida (considerando que a string está em UTC)
    const dataUTC = new Date(dataString);

    // Mapeia os dias da semana para seus respectivos nomes
    const nomesDiasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    // Obtém o índice do dia da semana correspondente
    const indiceDia = dataUTC.getUTCDay();

    // Obtém o nome do dia da semana a partir do mapeamento
    const diaDaSemana = nomesDiasDaSemana[indiceDia];
    return diaDaSemana;
}

export function pegaDiaAtual() {
    const dataAtual = new Date();
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Cancelar'];
    return diasDaSemana[dataAtual.getDay()];
}

export function obterTreinoMaisRecente(listaDeObjetos) {
    // Ordenar a lista de objetos pela data em ordem decrescente
    listaDeObjetos.sort(function(a, b) {
        return new Date(b.dataTreino) - new Date(a.dataTreino);
    });

    // Retornar o primeiro elemento da lista (o mais recente)
    return listaDeObjetos[0];
}

export function ordenarListaPorDataEConclusao(listaTreinos) {
     // Ordena a lista de treinos pela conclusão (em ordem decrescente) e pela data (em ordem decrescente)
     listaTreinos.sort((a, b) => {
        // Compara conclusão
        if (a.conclusaoTreino !== b.conclusaoTreino) {
            return b.conclusaoTreino - a.conclusaoTreino;
        }

        // Se a conclusão for a mesma, compara as datas
        return new Date(b.dataTreino) - new Date(a.dataTreino);
    });

    // Filtra os treinos concluídos (conclusaoTreino igual a 1)
    const treinosConcluidos = listaTreinos.filter(treino => treino.conclusaoTreino === 1);

    // Retorna a lista de treinos concluídos ordenada
    return treinosConcluidos;
}

/**
 * recebe uma string no formato "2023-12-12T05:27:30.000Z" e retorna a data formatada no padrão DD/MM/YYYY.
 *
 * @param {string} dataString
 * @return {string} 
 */
export function formatarData(dataString) {
    const data = new Date(dataString);
  
    // Obtém os componentes da data
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Os meses são zero indexados
    const ano = data.getFullYear();
  
    // Formata a data no formato DD/MM/YYYY
    const dataFormatada = `${dia}/${mes}/${ano}`;
  
    return dataFormatada;
  }