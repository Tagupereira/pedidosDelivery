const sair = document.querySelector("#sair");

sair.addEventListener("click",()=>{
  history.go(-1);
	
});

const cupons = document.querySelector("#cupons");

cupons.addEventListener("click",()=>{
	window.location.href = "../cupons/cupons.html";
	
});

function criar(){
	for(i=0; i < 50; i++){
		const content = document.querySelector("content");

		const div = document.createElement("div");
		div.setAttribute("class","lanche");

		const divimg = document.createElement("div");
		divimg.setAttribute("class","img");

		const img = document.createElement("img");
		img.setAttribute("src","lanche.jpg");
		img.setAttribute("loading","lazy");

		const description = document.createElement("div");
		description.setAttribute("class","description");

		const h3 = document.createElement("h3");
		h3.innerHTML = "lanche "+(i+1);

		const elementp = document.createElement("p");
		elementp.innerHTML="Pão, carne, queijo, cebola, picles, ketchup, mostarda e maionese";

		const divGrupoAdd = document.createElement("div");
		divGrupoAdd.setAttribute("class","grupoAdd");

		const divPreco = document.createElement("div");
		divPreco.setAttribute("class","preco");
		divPreco.innerHTML = "R$ 25,00";
		
		const divicon = document.createElement("div");
		divicon.setAttribute("class", "icon")
		
		
		const icon = document.createElement("i");
		icon.setAttribute("class","fa-solid fa-plus")
		

		content.appendChild(div);
		div.appendChild(divimg);
		divimg.appendChild(img);

		div.appendChild(description);
		description.appendChild(h3);
		description.appendChild(elementp);

		div.appendChild(divGrupoAdd);
		divGrupoAdd.appendChild(divPreco);
		divGrupoAdd.appendChild(divicon);
		divicon.appendChild(icon)
		
		divicon.addEventListener("click",()=>{
			//alert("adicionou "+h3.innerText)
			window.location.href = "../produto/produto.html";
		})
		

	}
}

criar()





