function calculadora(){

let n1 = Number(prompt("Insira um valor para A: "));
let n2 = Number(prompt("Insira um valor para B: "));



const operacao = Number(prompt('Escolha uma operação: \n 1-Soma(+) \n 2-Subtrair(-)\n 3-Multiplicar(*)\n  4-Divisao real(/)\n 5-Divisao inteira(%)\n 6-Potencicao(**)'));

if(!operacao || operacao>=7){
  alert("Erro - Operação Invalida!!");
}else{

if(!n1 || !n2){ alert(" Erro- Operação invalida"); }else{



function soma(){
  resultado = n1+n2
  alert(`${n1}+${n2} = ${resultado}`)
  novaOperacao()
}
function  subtrair(){
  resultado = n1-n2
  alert(`${n1}-${n2} = ${resultado}`)
  novaOperacao()

}

function  multiplicar(){
  resultado = n1*n2
  alert(`${n1}*${n2} = ${resultado}`)
  novaOperacao()

}


function  divisaoReal(){
  resultado = n1/n2
  alert(`${n1}/${n2} = ${resultado}`)
  novaOperacao()

}

function  divisaoInteira(){
  resultado = n1%n2
  alert(` O resto da  divisão entre o numeroA ${n1}e o númeroB${n2} é  ${resultado}`)
  novaOperacao()

}

function  potenciacao(){
  resultado = n1**n2
  alert(`${n1}**${n2} = ${resultado}`)
  novaOperacao()

}

function novaOperacao(){

  let opcao = prompt("Deseja fazer outra operação:\n 1 - Sim \n 2- Não");

  if( opcao == 1){
    calculadora()
  }else if ( opcao == 2){
    alert("Ate a próxima!!")
  }

}



if( operacao ==1) {
  soma()
  }else if(operacao == 2){
    subtrair()

  }else if( operacao ==3){
    multiplicar()

  }else if( operacao ==4){
    divisaoReal()

  }else if( operacao ==5){
    divisaoInteira()

  }else if ( operacao == 6){
    potenciacao()
  }


    }

  }
}


calculadora();