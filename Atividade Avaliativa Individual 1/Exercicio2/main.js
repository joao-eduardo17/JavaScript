let idade = prompt("Digite a sua idade")

if (idade < 15){
    x = "Criança"
} else if (idade < 30){
    x = "Jovem"
} else if (idade < 60){
    x = "Adulto"
} else {
    x = "Idoso"
}

alert(x)
document.write(x)
