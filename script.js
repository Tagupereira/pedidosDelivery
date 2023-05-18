const btn = document.querySelector(".btnEscolher");
const sair = document.querySelector("#sair");
//const cupons = document.querySelector("#cupons");

//cupons.addEventListener("click",()=>{
//	window.location.href = "../cupons/cupons.html";
//});

btn.addEventListener("click",(evt)=>{
  //alert('clicou')
  window.location.href="cardapio/pedido.html";
});

sair.addEventListener("click",()=>{
	console.log("saiu");
	
});