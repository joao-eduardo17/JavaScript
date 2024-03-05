let cod = prompt("Digite o seu código")
let hor = prompt("Digite o número de horas trabalhadas no mês")
let tur = prompt("Digite o seu turno (M/V/N)").toUpperCase()
let cat = prompt("Digite a sua categoria (G/F)").toUpperCase()
let sal = prompt("Digite o salário mínimo")
let vht, si, aa, total

if (cat == "F"){
    if (tur == "M" || tur == "V"){
        vht = sal * 0.01
    } else {
        vht = sal * 0.02
    }
} else {
    vht = sal * 0.04
}

si = vht * hor

if (si <= 800.00){
    aa = si * 0.25
} else if (si <= 1200.00){
    aa = si * 0.20
} else {
    aa = si * 0.15      
}
vht = vht.toFixed(2)
total = si + aa
si = si.toFixed(2)
aa = aa.toFixed(2)

alert(`Código ${cod}
Total de horas trabalhadas: ${hor} horas
Valor da hora trabalhada: R$${vht}
Salário inicial: R$${si}
Auxílio alimentação: R$${aa}
Salário final: R$${total}`)

document.write(`Código ${cod}
Total de horas trabalhadas: ${hor} horas
Valor da hora trabalhada: R$${vht}
Salário inicial: R$${si}
Auxílio alimentação: R$${aa}
Salário final: R$${total}`)
