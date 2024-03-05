let n1 = prompt("Digite um número")
let sous = prompt("Soma ou subtração?").toUpperCase()
let n2 = prompt("Digite um número")

n1 = parseInt(n1)
n2 = parseInt(n2)

function calcula(n1, n2, param){
    if (param == 'soma'){
        return n1 + n2
    } else {
        return n1 - n2
    }
}

alert(`O resulatdo é: ${calcula(n1,n2,sous)}`)
document.write(`O resulatdo é: ${calcula(n1,n2,sous)}`)
