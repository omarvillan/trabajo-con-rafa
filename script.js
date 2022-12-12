// alert("todo ok por aqui");

const btnMasInfo = document.getElementById("btnMasInfo");
const btnMasInfo2 = document.getElementById("btnMasInfo2");
const contenedorMenuDown = document.getElementById("contenedorMenuDown");
const contenedorMenuDown2 = document.getElementById("contenedorMenuDown2");
const btnCategorias = document.getElementById("btnCategorias");

const imagenGrande = document.getElementById("imagenGrande");
const padreImagenGrande = document.getElementById("hoverIMAGENES");



btnMasInfo.addEventListener("click", visibilidadDiv);

function visibilidadDiv(){
    contenedorMenuDown.classList.toggle("descubrirMenu");
    btnMasInfo.classList.toggle("cambioColor");
}

btnMasInfo2.addEventListener("click", visibilidadDiv2);

function visibilidadDiv2(){
    contenedorMenuDown2.classList.toggle("descubrirMenu2");
    btnMasInfo2.classList.toggle("cambioColor");
}


// NO QUIERE

padreImagenGrande.children[i].addEventListener("mouseover", function(){

    this.children[1].classList.toggle("zIndex10");
});



