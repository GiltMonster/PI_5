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

export function obterDiaDaSemana(dataString) {
    // Cria um objeto Date com base na string de data fornecida
    const data = new Date(dataString);

    // Mapeia os dias da semana para seus respectivos nomes
    const nomesDiasDaSemana = [
        'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
    ];

    // Obtém o índice do dia da semana correspondente
    const indiceDia = data.getDay();

    // Obtém o nome do dia da semana
    const diaDaSemana = nomesDiasDaSemana[indiceDia];
    console.log("diaDaSemana", diaDaSemana);
    return diaDaSemana;
}