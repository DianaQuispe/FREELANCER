/*
 * Archivo principal de JS
 */
var row = document.getElementById("row");
var imagenes = ["assets/images/portfolio/cabin.png","assets/images/portfolio/cake.png","assets/images/portfolio/circus.png","assets/images/portfolio/game.png","assets/images/portfolio/safe.png","assets/images/portfolio/submarine.png"];
for(var i=0; i <imagenes.length; i++) {
        var div = document.createElement("div");
    div.setAttribute("class", "col-4");
    var crearIM = document.createElement("img");
    crearIM.setAttribute("src", imagenes[i]);
    crearIM.setAttribute("onclick", 'iMG()');
    crearIM.style.cursor = "pointer";
    crearIM.setAttribute("class", "imagenes");
    div.appendChild(crearIM);
    row.appendChild(div);
}
