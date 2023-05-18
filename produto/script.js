const produto = [
  {
    nome:"Lanche Big Duplo",
    ingredientes: "Pão, 02 carnes, cheddar, cebola, picles, alface, molho especial e maionese",
    preco:25.00
  }
]

const adicionais = [
  {
    nome:"Carne",
    preco:5.00
  },
  {
    nome:"Frango",
    preco:6.00
  },
  {
    nome:"Cheddar",
    preco:3.00
  }
  ,
  {
    nome:"Bacon",
    preco:3.00
  },
  {
    nome:"Picles",
    preco:1.00
  },
  {
    nome:"Tomate",
    preco:1.00
  },
  {
    nome:"Alface",
    preco:1.00
  },
  {
    nome:"Cebola",
    preco:1.00
  }
]

const sair = document.querySelector("#sair")
const content = document.querySelector("content")
const cupons = document.querySelector("#cupons")
const btnPrice = document.querySelector(".price")

const div = document.createElement("div")
const divimg = document.createElement("div")
const img = document.createElement("img")
const description = document.createElement("div")
const h3 = document.createElement("h3")
//const h3Preco = document.createElement("h3")
const elementp = document.createElement("p")
const divGrupoAdd = document.createElement("div")
//const divPreco = document.createElement("div")
const divicon = document.createElement("div");
const icon = document.createElement("i");
const tituloAdc = document.createElement("div");
const h4 = document.createElement("h4")



div.setAttribute("class","lanche")
divimg.setAttribute("class","imagem")
img.setAttribute("src","lanche.jpg")
img.setAttribute("class","img")
description.setAttribute("class","description")
divGrupoAdd.setAttribute("class","grupoAdd")

divicon.setAttribute("class", "icon")
icon.setAttribute("class","fa-solid fa-plus")
tituloAdc.setAttribute("class","tituloAdc")


h3.innerHTML = produto[0].nome
elementp.innerHTML= produto[0].ingredientes;
h4.innerHTML = "Adicionais";


content.appendChild(divimg)
divimg.appendChild(img)
content.appendChild(description)
description.appendChild(h3)
description.appendChild(elementp)

content.appendChild(tituloAdc)
tituloAdc.appendChild(h4)

for(i = 0; i <= adicionais.length-1; i++){
  //fazer loop para mostrar os adicionais.
  
  const itemAdc = document.createElement("div");
  itemAdc.setAttribute("class","itemAdc")
  
  const itemNome = document.createElement("div");
  itemNome.innerHTML = adicionais[i].nome
  content.appendChild(itemAdc)
  
  const valorAdc = document.createElement("div")
  valorAdc.setAttribute("class","valor")
  valorAdc.innerHTML = adicionais[i].preco+".00"

  const grupAddItem = document.createElement("div")
  grupAddItem.setAttribute("class","grupAddItem")
  
  const removItem = document.createElement("div")
  removItem.setAttribute("class","removItem btngrup")
  removItem.innerHTML = "-"

  const qtdAdc = document.createElement("div")
  qtdAdc.setAttribute("class","qtd")
  qtdAdc.innerHTML = "0"

  const addItem = document.createElement("div")
  addItem.setAttribute("class","addItem btngrup")
  addItem.innerHTML = "+"

  content.appendChild(itemAdc)
  
  itemAdc.appendChild(itemNome)
  itemAdc.appendChild(valorAdc)
  itemAdc.appendChild(grupAddItem)
  grupAddItem.appendChild(removItem)
  grupAddItem.appendChild(qtdAdc)
  grupAddItem.appendChild(addItem)

 

}


const qtd = document.querySelector(".qtd")
const adc = document.querySelector(".addItem")
const del = document.querySelector(".removItem")

var qtdItem=0;

btnPrice.innerHTML =produto[0].preco+".00"

adc.addEventListener('click', ()=>{
  qtdItem++;
  qtd.innerHTML=qtdItem;
  const preco = adicionais[i].preco
  const price = produto[i].preco + (preco * qtdItem)
  btnPrice.innerHTML = price+".00" 
});

del.addEventListener('click', ()=>{
  qtdItem--;
  const sub = btnPrice.innerText
  const precoadd = adicionais[0].preco

  let total = sub-precoadd
  btnPrice.innerHTML= total+".00"

  if(qtdItem <= 0){
    qtdItem = 0;
    qtd.innerHTML=0;
    btnPrice.innerHTML = produto[0].preco+".00"
  }else{
    qtd.innerHTML=qtdItem;
  };
});


for(i = 0; i <= adc; i++){
  console.log("oi")
}


sair.addEventListener("click",()=>{
	history.go(-1);
});

cupons.addEventListener("click",()=>{
	window.location.href = "../cupons/cupons.html";
});




