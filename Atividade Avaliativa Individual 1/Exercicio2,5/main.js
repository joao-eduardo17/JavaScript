let n1 = prompt("Digite sua nota na Atividade prático em laboratório")
let n2 = prompt("Digite sua nota na Prova do semestre")
let n3 = prompt("Digite sua nota no Trabalho teórico")
let media = ((n1 * 0.2) + (n2 * 0.5) + (n3 * 0.3))/3
media = media.toFixed(2)
let clas

if (media <= 5){
    clas = "F"
} else if (media <= 6){
    clas = "E"
} else if (media <= 7){
    clas = "D"
} else if (media <= 8){
    clas = "C"
} else if (media <= 9){
    clas = "B"
} else {
    clas = "A"
}

alert(`A média dp aluno é = ${media} e sua classificação é ${clas}`) 
document.write(`A média dp aluno é = ${media} e sua classificação é ${clas}`)
