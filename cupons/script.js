
//import {click} from "../../alerts/alerts.js"

const sair = document.querySelector("#back");


sair.addEventListener("click",()=>{
	history.go(-1);
	console.log("saiu");
	
});

function cupom(){
	for(let i=0; i<8 ; i++){
		const content = document.querySelector("content");

		const div = document.createElement("div");
		div.setAttribute("class","cupom");
		div.setAttribute("id", "cupom"+i);

		const divimg = document.createElement("div");
		divimg.setAttribute("class","img");

		const description = document.createElement("div");
		description.setAttribute("class","description");

		const descInfo = document.createElement("p");
		descInfo.setAttribute("class","descInfo");

		descInfo.innerHTML ="<span><n class='textdesconto'>25% OFF </n><b class='bold'>DESCONTO</b></span>";

		const iconStar = document.createElement("i");
		iconStar.setAttribute("class","fa-solid fa-star");

		const h3 = document.createElement("h3");
		h3.innerHTML ="<i class='fa-solid fa-star'></i> CUPOM " +(i+1)+" <i class='fa-solid fa-star'></i>";

		const elementP = document.createElement("p");
		elementP.innerHTML="Desconto de 25% no seu pedido!";

		const validade = document.createElement("p");
		validade.innerHTML="<i>Cupom válido até 24-03</i>";

		const divGrupoAdd = document.createElement("div");
		divGrupoAdd.setAttribute("class","grupoAdd");

		const divicon = document.createElement("div");
		divicon.setAttribute("class", "icon");

		const icon = document.createElement("i");
		icon.innerHTML = "25%";


		content.appendChild(div);

		div.appendChild(divimg);

		divimg.appendChild(descInfo);

		div.appendChild(description);

		description.appendChild(h3);

		description.appendChild(elementP);
		description.appendChild(validade);

		div.appendChild(divGrupoAdd);

		divGrupoAdd.appendChild(divicon);

		divicon.appendChild(icon)
	
		
		div.addEventListener("click",()=>{
			alert("adicionou "+h3.innerText+" com "+icon.innerText+" de desconto")
			div.remove(div.id)
		})
	}

}

cupom();






