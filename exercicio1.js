/* ### Transformar notas escolares

Cire um algoritimo que transforme as notas do sistemas numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F

*/
let avaliacao = 0;



function notas(Av) {
  let notaA = Av >= 90 && Av <= 100;
  let notaB = Av >= 80 && Av <= 89;
  let notaC = Av >= 70 && Av <= 79;
  let notaD = Av >= 60 && Av <= 69;
  let notaF = Av < 60 && Av >= 0;

  let avaliacaoFinal;

  if (notaA) {
    avaliacaoFinal = Av + " = A";
  } else if (notaB) {
    avaliacaoFinal = Av + " = B";
  } else if (notaC) {
    avaliacaoFinal = Av + " = C";
  } else if (notaD) {
    avaliacaoFinal = Av + " = D";
  } else if (notaF) {
    avaliacaoFinal = Av + " = F";
  } else {
    avaliacaoFinal = "Nota inválida";
  }
  
  console.log(avaliacaoFinal);

  return avaliacaoFinal;
  
  

  
}

notas(90);
