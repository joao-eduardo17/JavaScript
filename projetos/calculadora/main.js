// Números
const n1 = document.querySelector("#b1")
const n2 = document.querySelector("#b2")
const n3 = document.querySelector("#b3")
const n4 = document.querySelector("#b4")
const n5 = document.querySelector("#b5")
const n6 = document.querySelector("#b6")
const n7 = document.querySelector("#b7")
const n8 = document.querySelector("#b8")
const n9 = document.querySelector("#b9")
const n0 = document.querySelector("#b0")

// Operações
const soma = document.querySelector("#soma")
const subtracao = document.querySelector("#subtracao")
const mutiplicacao = document.querySelector("#mutiplicacao")
const divisao = document.querySelector("#divisao")
const potencia = document.querySelector("#potencia")
const igual = document.querySelector("#igual")

// Funções da calculadora
const limpaAC = document.querySelector("#limpa")
const virgula = document.querySelector("#virgula")
const apaga = document.querySelector("#apaga")
const parenteses = document.querySelector("#parenteses")
const resultado = document.querySelector("#resultado")

// 
n1.addEventListener("click", () => {
    resultado.innerHTML = resultado.value + "1"
})
