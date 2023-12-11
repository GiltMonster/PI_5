export function salvaPrimeiraLetra(palavra) {
    return palavra.charAt(0);
}

export function retornarPalavraPorLetra(letra) {
    letra = letra.toLowerCase();
    if (letra === 's') {
        return 'Superior';
    } else if (letra === 'i') {
        return 'Inferior';
    } else if (letra === 'm'){
        return 'Masculino';
    } else if (letra === 'f'){
        return 'Feminino';
    }
} 