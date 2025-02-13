let attempts = 1
let randomNumber = 0

function random() {
    /*gera o numero aleatório e faz com que crie sempre q a página é recarregada*/ 
     randomNumber = parseInt(Math.floor(Math.random() * 100));
    console.log(randomNumber)
}
function verificar(){
    let input = document.getElementById("input").value
    if(input>100 || input<0){
        alert("Aposta inválida")
    }
    if(input > randomNumber){
        alert("O número aleatório é menor")
        attempts++
    }
    else if(input < randomNumber){
        alert("O número aleatório é maior")
        attempts++
    }
    else{
        alert("Parabéns, você acertou com " + attempts + " tentativas")
        attempts++
    }
}
function dicas(){
    let numeroDeDicas = 0
    numeroDeDicas++
    if(numeroDeDicas == 0 && randomNumber%2 == 0){
        alert("O número aleatório é par!")
    }
    else if(numeroDeDicas == 0 && randomNumber%2 !== 0){
        alert("O número é ímpar!")
    }
    if(numeroDeDicas == 1 && randomNumber%5 == 0){
        alert("O número é mútiplo de 5!")
    }
    else if(numeroDeDicas == 1 && randomNumber%3 == 0){
        alert("O número é múltiplo de 3!")
    }
    else if(numeroDeDicas == 1 && randomNumber%3 !== 0){
        alert("O número não é múltiplo de 3!")
    }
    else if(numeroDeDicas == 1 && randomNumber%3 !== 0){
        alert("O número não é múltiplo de 3!")
    }
    else if(numeroDeDicas >=2){
        alert("Suas dicas já foram usadas!")
    }
}
random()



