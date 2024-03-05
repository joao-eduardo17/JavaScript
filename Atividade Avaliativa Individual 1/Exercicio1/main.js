let nome = prompt("Digite o seu nome")
let altura = prompt("Digite sua altura em centímetros")
let peso = prompt("Digite seu peso")
let faixa
let imc

altura /= 100
imc = peso / (altura**2)
imc = imc.toFixed(2)  
if (imc < 16){
    faixa = "Baixo peso muito grave"
} else if (imc <= 16.99){
    faixa = "Baixo peso grave"
} else if (imc <= 18.49){
    faixa = "Baixo peso"
} else if (imc <= 24.99){
    faixa = "Peso normal"
} else if (imc <= 29.99){
    faixa = "Sobrepeso"
} else if (imc <= 34.99){
    faixa = "Obesidade grau I"
} else if (imc <= 39.99){
    faixa = "Obesidade grau II"
} else{
    faixa = "Obesidade grau III"
}

alert(nome + " possui índice de massa corporal igual a " + imc + ", sendo classificado como: " + faixa)
document.write(nome + " possui índice de massa corporal igual a " + imc + ", sendo classificado como: " + faixa)

