
const opcao = parseInt(prompt("Digite uma opção: "));
switch(opcao){
    case 1:
        document.write("Primeira opção")
        break;
    case 2:
        document.write("Segunda opção")
        break;
    case 3:
        document.write("Terceira opção")
        break;
    default:
        document.write("Nenhuma opção")
}

let valor = 7;
document.write("<br><br>")
document.write(valor);
document.write("<br><br>")
valor = valor+1
document.write(valor);
document.write("<br><br>")

let valor2 = 10;
document.write(valor2)
document.write("<br><br>")
valor2 = valor2 -1
document.write(valor2)
document.write("<br><br>")


for(let i=0; i<= 10; i++){
    document.write("Agora i vale: "+i)
    document.write("<br><br>")
}

let carros =["Celta ","Fit ","City ","H-RV ","Civic"]
for(let i =0; i <carros.length;i++){
    document.write(carros[i]);
    document.write("<br><br>")
}
