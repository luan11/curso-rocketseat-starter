// import { soma as somaFunc, sub } from './funcoes'; // Funcoes sem default
// import soma, { sub } from './funcoes'; // Funcao default + outras funcoes
import * as funcoes from './funcoes'; // Todas as funcoes do arquivo
// import somaFunction from './soma'; // Funcao default

console.log(funcoes.soma(1,2));
console.log(funcoes.sub(4,2));
// console.log(somaFunction(50, 20));