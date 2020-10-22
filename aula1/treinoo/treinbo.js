//exercicio 1 contas

/*
function contas(a,b){

return console.log(a+b),console.log(a*b)

}
contas(55,2)
*/



//ecercicios 2 trianguilos


/*

function triangulo(a,b,c){

    if(a==b&&b==c){
        console.log('o triangulo e : EQUILATERO')
    }else if(a==b||b==c){
        console.log('o triangulo e :ISOCELIS')
    }else{
        console.log('o trianguloe e :escaleno')
    }
}

triangulo(15,20,15)

*/


//exercicios 3 divisao +resto
/*
function div(a,b){
    console.log('o produto da divisao:'+a/b),console.log('o resto da divisao :'+a%b)
}

div(55,34)
*/

//exercicios 5 divisao


/*
function transf(num){



    return console.log('R$'+num.toFixed(2))
}
transf(0.30000000000000004)

*/





//exercicios 6 jurus

//montante simples
/*
function jurus(c,i,t){
    return(
    jurus1 = c*((i/100)*t),
    console.log('o valor do montante :' + (c+jurus1))
    )
}
jurus(1000,2,3)


*/


//montante composto


/*
function compost(c,i,t){

  let m = c*(1+i/100)**t
  let res2=m-c
  console.log('o nvalor do montante total :'+m.toFixed(2))
  console.log('o valor ndo jurus:'+res2.toFixed(2))
}

compost(1000,3,3)

*/


// exercicios 7 formula de bascara pulei!!


//exercicios 8 pedro e classsificaçao

/*

function pontos(){

    let pontuacao=[10,5,2,8,3]
    let pior=100,melhor=0

    for (let cont=0;cont<=5;cont++){
        if(melhor < pontuacao[cont]){
            melhor = pontuacao[cont]
        }
    }

    for (let cont=0;cont<=5;cont++){
        if(pior > pontuacao[cont]){
            pior = pontuacao[cont]
        }
    }

console.log('a melhor pontuacao de pedro '+melhor)
console.log('a pior pontuacao de pedro '+pior)

}

pontos()

*/


//exercicio 9 notas alunos pulei !!!




//exercicio 10

/*

function div(n){
    if(n%3==0){
        res =true
    }else {
        res = false
    }

return console.log(res)

}

div(30)

*/



//exercidio 11 nao bisexto

/*

function ano(a){
    if(a%4==0){
        res =true
    }else {
        res = false
    }

    console.log(res)
}
ano(403)


*/


//exerciccio 12 fatorial (nao deu certo)

/*

function fator(N){
    let n1=1,n2=2,inter
    let cont
}

fator(5)
*/

//    exercicios 13

/*

function semana(dia){

    switch (dia){
      case 1:
          console.log(' DOMINGO, 1o dia da semana, nao e dia util')
          break;
      case 2:
          console.log('SEGUNDA 2o dia da semana, dia util')
          break;
      case 3:
          console.log ('TERCA 3o dia da semana, dia util')
          break;
      case 4:
          console.log ('QUARTA 4o dia da semana, dia util')
      case 5:
          console.log ('QUINTA 5o dia da semana, dia util')
          break;
      case 6:
          console.log ('SEXTA 6o dia da semana, dia util')
          break;
      case 7:
          console.log ('SABADO 7o dia da semana, dia util')

        default:
            console.log('dia inexistente')

        }



}

semana(5)
*/


//exercicio 14 banca de frutas

/*

function banca(esc){
    console.log('escolha a fruta')
    console.log('digite 1 para kiwi')
    console.log('digite 2 para maça')
    console.log('digite 3 para melancia')
    console.log('-------------------------' )

    switch(esc){

        case 1:
            console.log('estamos com uma grande escassees dessa fruta :(')
        break;
        case 2:
            console.log('nao vendemos essa fruta aqui')
        break;

        case 3:
            console.log('a melancia esra 3 o kg')
        break;
        default:
            console.log('desculpe nao entendi')
    }

}

banca(5)

*/


//exercicios 15 concessionaria pulei


// exercicio 16 calculadora

/*

function cal(a,op,b){

    switch(op){

        case '+':
            console.log(a+b)
        break;
        case '-':
            console.lg(a-b)
        break;
        case '*':
            console.log(a*b)
        break;

        default:{
            console.log('operaçao invalida')
        }
    }
}
cal(55,'+',91)


*/

//exercicio 20 quantidade de notas


/*

function saque(valors) {
    let cont100 = 0
    let cont50 = 0
    let cont10 = 0
    let cont5 = 0
    let cont1 = 0

    let valnota = calcuvaln(valors)
    // => esse e o contador principal
    while (valors >= valnota) {
        switch (valnota) {
            case 100:
                valors -= 100
                cont100++
                break;
            case 50:
                valors -= 50
                cont50++
                break;
            case 10:
                valors -= 10
                cont10++
                break;
            case 5:
                valors -= 5
                cont5++
                break;
            case 1:
                cont1++
                valors -= 1
                break;
        }

        valnota = calcuvaln(valors)
    }

    return elabores(cont100, cont50, cont10, cont5, cont1)
}

// => aqui o valor e "cortado" no maior valor possivel

function calcuvaln(valors) {

    if (valors >= 100) {
        return 100
    } else if (valors >= 50) {
        return 50
    } else if (valors >= 10) {
        return 10
    } else if (valors >= 5) {
        return 5
    } else if (valors >= 1) {
        return 1
    }
}

// => aqui a funçao retorna  a funçao princ. para ser lido pelo usuario

function elabores(cont100, cont50, cont10, cont5, cont1) {

    let result = ''

    if (cont100 > 0) {
        result += `${cont100} nota(s) de R$ 100. `
    }
    if (cont50 > 0) {
        result += `${cont50} nota(s) de R$ 50. `
    }
    if (cont10 > 0) {
        result += `${cont10} nota(s) de R$ 10. `
    }
    if (cont5 > 0) {
        result += `${cont5} nota(s) de R$ 5. `
    }
    if (cont1 > 0) {
        result += `${cont1} nota(s) de R$ 1. `
    }

    return result
}

console.log(saque(1588))

*/



//exercicio 21 plano de saude



/*



function plano(idade) {

    let valorpg = 100

    if (idade >= 60) {
        valorpg += 130
    } else if (idade <= 60) {
        valorpg += 95
    } else if (idade <= 30) {
        valorpg += 50
    } else if (idade < 10) {
        valorpg += 80
    }
    return console.log('o valor a ser pago e :' + valorpg + ',00 R$ reais')

}

plano(78)


*/



//exercicio 22 anuidade

/*

function anuidade(mes, valor) {
    let resp
    resp = valor * (1 + (5 / 100)) ** mes

    return console.log('o valor a ser pago e :' + resp.toFixed(2))

}



anuidade(5, 400)


*/



/*


function situacaoaa(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 2

    if (media >= 5) {
        console.log('aluno APROVADO com a media ' + media.toFixed(2))
    } else if (media <= 5) {
        console.log('aluno REPROVADO com a media ' + media.toFixed(2))
    }

}

situacaoaa(4, 3, 3)

*/



//atividade 24 hello wolrd 11x
/*

function olaw() {
    let cont = 0
    while (cont <= 11) {
        console.log(cont + ' - hello world')
        cont += 1
    }

}
olaw()

*/



//atividade 25 contar ate 50


/*

function conta() {
    for (let cont = 1; cont <= 50; cont++) {

        console.log(cont)
    }
}

conta()


*/




//atividade 26 encontrar pares de 1a 100

/*

function pares() {
    let v1 = []
    for (let cont = 1; cont <= 100; cont++) {
        if (cont % 2 == 0) {
            console.log(cont)
        }
    }

}

pares()
*/



//atividade 27 crescimento das crianças

//simples





/*



function crescimeto(c1, ca1, c2, ca2) {

    let espec1, espec2 = 0

    espec1 = ((12 * ca1) * 10) + c1
    espec2 = ((12 * ca2) * 10) + c1

    if (espec1 > espec2) {
        console.log('a peimeira crainça em 10 anos crescera ' + (espec1 - espec2) + ' centimetros a mais que a segunda')
    } else {
        console.log('a segunda crainça em 10 anos crescera ' + (espec2 - espec1) + ' centimetros mais que a primeira ')
    }



}

crescimeto(55, 1, 54, 1.2)



*/

//completo

/*

function crescimento(altura1, taxa1, altura2, taxa2) {
    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            return 'a primeira criança  nao sera ultrapassada'
        } else if (taxa1 < taxa2) {
            return 'a segunda criança nao sera ultrapassada'
        } else {
            return 'as ciranças crescera igualmente'
        }

    } else {
        if (altura1 > altura2) {
            if (taxa1 >= taxa2) {
                return 'a criança 1 nao sera ultrapassada'
            } else {
                return calculatem(altura2, taxa2, altura1, taxa2)
            }
        } else {
            if (taxa1 < taxa2) {
                return 'a criança maior nao sera ultrapassada'
            } else {
                return calculatem(altura1, taxa1, altura2, taxa2)
            }
        }
    }
}

function calculatem(alturame, taxamen, alturama, taxama) {
    let anos = 0
    while (alturame < alturama) {
        alturame += taxamen
        alturama += taxama
        ano++
    }
    return console.log('a idade sera ultrapassada em' + anos + ' anos')
}

crescimento(121, 1, 121, 1)






*/



//atividade 28 array valores pares

/*

function ler() {

    let vet1 = [1, 5, 1, 2, 6, 74, 7, 8, 9, 9, 66, 5, 4, 7, 3, 3, 3, 5, 8]
    let vet2 = []
    for (cont in vet1) {
        if (vet1[cont] % 2 == 0) {
            vet2.push(vet1[cont])
        }
    }
    return console.log(vet2)

}

ler()

*/

//atividade 29

/*
function contavetor() {
    let vet1 = []
    let vet2 = []
    let vet3 = []

    for (let index = 0; index < 80; index++) {
        vet1.push(index)

    }
    // for (cont in vet1) {
    //
    //  if (vet1[cont] >= 10 && vet1[cont] <= 20)

    //     vet1[cont] >= 10 && vet1[cont] <= 20 ? vet2.push(vet1[cont]) : []
    // }
    vet1.map(r => (r >= 10 && r <= 20) && vet2.push(r))
    vet1.map(r => (r < 10 || r > 20) && vet3.push(r))
    console.log('valores no intervalo de 10 a 20 : ' + vet2)
    console.log('valores exeto intervalo de 10 a 20 : ' + vet3)
}

contavetor()

*/




//forma extensa pulei!!

/*

function contavetor() {
    let vet1 = [55, 4, 8, 99, 7, 5, 35, 6, 87, 1, 5, 23, 5, 4, 85, 4, 7, 5, 66, 9, 3, 2, 4, 7]
    let vet2 = []
    let vet3 = []
    for (cont in vet1) {
        if (vet1[cont] >= 10 && vet1[cont] <= 20) {
            vet2.push(vet1[cont])
        }
        if (vet1[cont] >= 20 || vet1[cont] <= 10) {
            vet3.push(vet1[cont])
        }

    }

    console.log('valores no intervalo de 10 a 20 : ' + vet2)
    console.log('valores exeto intervalo de 10 a 20 : ' + vet3)


}


contavetor()

*/



// exeercicio 30

/*


function correvet() {

    let val1 = 0
    let val2 = 100
    let vet1 = [55, 4, 8, 99, 7, 5, 35, 6, 87, 1, 5, 23, 5, 4, 85, 4, 7, 5, 66, 9, 3, 2, 4, 7]

    for (let cont = 0; cont <= vet1.length; cont++) {
        if (vet1[cont] > val1) {
            val1 = vet1[cont]
        }
        if (vet1[cont] < val2) {
            val2 = vet1[cont]
        }
    }

    return console.log('maior valor :' + val1), console.log('menor valor :' + val2)

}
correvet()


*/

// 31 contar vet negativos

/*

function contvet() {
    let vet1 = [55, -22, 1, 4, 77, -5, 2, 77, 8, -25, 47, 91, 5, 4, 76, 22, -78, 32, 18, 65, 47, 44]
    let quantos = 0
    for (cont in vet1) {
        if (vet1[cont] < 0) {
            quantos++
        }
    }

    return console.log('exixtem ' + quantos + ' numeros negativos')
}


contvet()

*/
//32 somar e fazer a media
/*
function mediavet() {
    let vet1 = [55, -22, 1, 4, 77, -5, 2, 77, 8, -25, 47, 91, 5, 4, 76, 22, -78, 32, 18, 65, 47, 44]
    let n1 = 0

    for (let cont = 0; cont < vet1.length; cont++) {
        n1 += vet1[cont]


    }
    let media = n1 / vet1.length
    return console.log('a media e : ' + (media.toFixed(2)))

}

mediavet()

*/
//concat vetores atividade 33

/*

function vetmal() {

    let vet2 = ['a', 'jao', 'maria', 'fernanda']
    let vet3 = [12.5, 13.7, 22.8, 55.2]
    let vet1 = [55, 8, 9, 50]


    let conall = vet2.concat(vet3)
    let conall2 = conall.concat(vet1)
    return console.log(conall2)
}


vetmal()

*/


//pulei a atividade 34


//atividade 35 vetpilha e mostrar

/*
function pilha() {
    let vetpilha = [1, 2, 3, 4, 5]
    let adiciona = [6, 7, 8, 9, 10]

    for (cont = 0; cont < adiciona.length; cont++) {
        vetpilha.push(adiciona[cont])
    }

    console.log(vetpilha)


}
pilha()


*/



// atividade 36 funcao dupla 

/*

function primeiro(newvet) {


    vet1 = [6, 7, 8, 9, 10, 55, 22, 1, 4, 77, 5, 2, 77, 8]
    newvet = []
    let num = 3
    for (cont in vet1) {
        if (vet1[cont] * num > 5) {
            newvet.push(vet1[cont])
        }
    }
    return segundo(newvet)
}





function segundo(newvet) {
    let num = 3
    newvet2 = []
    for (cont in newvet) {
        newvet2.push(newvet[cont] * num)
    }

    return console.log(newvet2)
}


primeiro()


*/


//exercicios 37 nao sei progressao aritmetica


// exercicio 38 conta impares


/*


function contpar(cont, final) {

    if (cont % 2 == 0) {
        cont--
    }



    for (cont; cont <= 100; cont += 2) {

        console.log(cont)

    }

}
contpar(10, 150)

*/

//exercicios 39 trocar valor vetor
/*

function trocar() {

    let vet1 = [6, 7, 8, 9, 10, 55, 22, 1, 4, 77, 5, 2, 77, 8]
    let vet2 = [55, -22, 1, 4, 77, -5, 2, 77, 8, -25, 47, 91, 5, 4, 76, 22, -78, 32, 18, 65, 47, 44]
    let vet3 = []
    vet3 = vet1
    vet1 = vet2
    vet2 = vet3

    return (console.log(vet1), console.log(vet2))




}


trocar()


*/

///40

/*

function notas(vet) {

    let resposta = []
    for (let cont = 0; cont < vet.length; cont++) {

        if (vet[cont] < 5) {
            resposta.push('D')
        } else if (vet[cont] > 5 && vet[cont] <= 6.9) {
            resposta.push('C')
        } else if (vet[cont] >= 7 && vet[cont] <= 8.9) {
            resposta.push('B')
        } else if (vet[cont] >= 9 && vet[cont] <= 10) {
            resposta.push('A')
        } else {
            resposta.push('nota invalida')
        }
    }

    return resposta
}
let vet = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
let vernotas = notas(vet)
console.log(vernotas)


*/