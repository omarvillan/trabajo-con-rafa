// alert("todo ok por aqui");

const blackScreen = document.getElementById("blackScreen");
const btnMasInfo = document.getElementById("btnMasInfo");
const btnMasInfo2 = document.getElementById("btnMasInfo2");
const contenedorMenuDown = document.getElementById("contenedorMenuDown");
const contenedorMenuDown2 = document.getElementById("contenedorMenuDown2");
const btnCategorias = document.getElementById("btnCategorias");



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








btnCategorias.addEventListener("mouseover", function(){

    blackScreen.classList.add("blackScreen");

});
btnCategorias.addEventListener("mouseout", function(){

    blackScreen.classList.remove("blackScreen");

});




// for (var i = 0; i < padreImagenGrande.children; i++){

//     this.children[1].classList.toggle("zIndex10");
// }




for( let d =0; d < padreImagenGrande.children.length; d++){
    padreImagenGrande.children[d].addEventListener("mouseover", function(){

        mostrados = document.getElementsByClassName('zIndex10');
        for( let j =0; j < mostrados.length; j++) {
          mostrados[j].classList.remove('zIndex10');
        };
        this.children[1].classList.add("zIndex10");
    });
};








const panelDerecha = document.getElementById("panelDerecha");




window.addEventListener("scroll", function(){

    panelDerecha.classList.toggle("fixedDiv",window.scrollY>0);




});