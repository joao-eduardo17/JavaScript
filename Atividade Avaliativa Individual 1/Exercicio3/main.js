let rast = prompt("Deseja rastreamento? (S/N)").toUpperCase()
let dist = prompt("Digite a distância em KM")
let pecas = prompt("Digite a quantidade de peças")
let reg = prompt("Qual a sua região? (1-Sul) (2-Sudeste) (3-Centro-Oeste)")
let combustivel = 5.58
let taxa, vdf, desc, pecas2, frete, fretekm
fretekm = dist * combustivel

if (rast == "S"){
    taxa = 200.00
} else {
    taxa = 0.00
}

switch (reg){
    case '1':
        vdf = 1.00
        desc = 0.1
        break
    case '2':
        vdf = 1.20
        desc = 0.12
        break
    case '3':
        vdf = 1.3
        desc = 0.13
        break
}

if (parseInt(pecas) > 1000){
    pecas2 = parseInt(pecas) - 1000
    frete = (pecas * vdf) + (pecas2 * desc)
} else {
    frete = (pecas * vdf)
}

alert(`Taxa de rastreamento: R$${taxa}
Valor do frete pelas peças: R$${frete}
Valor do frete por quilômetro: R$${fretekm}
Total do frete: R$${taxa+frete+fretekm}`)
document.write(`Taxa de rastreamento: R$${taxa}
Valor do frete pelas peças: R$${frete}
Valor do frete por quilômetro: R$${fretekm}
Total do frete: R$${taxa+frete+fretekm}`)
