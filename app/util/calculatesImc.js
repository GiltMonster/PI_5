import replace from './replace';

export const calculatesImc = (weight, height, setImcCategory, setIdealWeight) => {
  const imcValue = weight / Math.pow(height,2);
  const maxIdealWeight = 25 * Math.pow(height,2);
  const minIdealWeight = 18.5 * Math.pow(height,2);
  
  if (imcValue < 18.5) {
    setImcCategory("Abaixo do Peso");
  } else if (imcValue < 25) {
    setImcCategory("Peso Normal");
  } else if (imcValue < 30) {
    setImcCategory("Acima do Peso");
  } else if (imcValue >= 30){
    setImcCategory("Obesidade");
  } else {
    message = 'Os valores informados são inválidos!'
  }

  setIdealWeight(`${replace(minIdealWeight.toFixed(2))} Kg - ${replace(maxIdealWeight.toFixed(2))} Kg`)
}
