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

export function retornaTrueOuFalse(valor) {
    if (valor === 1) {
        return true;
    } else {
        return false;
    }
}

export function retornaUmOuZero(valor){
    if (valor === true) {
        return 1;
    } else {
        return 0;
    }
}