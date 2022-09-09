var listaFilmes = ["https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg", "https://br.web.img3.acsta.net/medias/nmedia/18/87/32/31/20028688.jpg", "https://br.web.img2.acsta.net/r_1280_720/img/86/51/86513ed90118b9d738e65f498c31cfdd.jpg", "https://br.web.img3.acsta.net/pictures/18/07/21/11/44/3365778.jpg", "https://asset.vg247.com/sonic-2-poster.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/sonic-2-poster.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/2/2f/6875.jpg/200px-6875.jpg", "https://br.web.img2.acsta.net/medias/nmedia/18/87/03/15/19871286.jpg", "https://www.mubis.es/media/users/7286/102979/poster-y-trailer-espanol-de-stand-by-me-doraemon-original.jpg", "https://m.media-amazon.com/images/I/71QVpL6t4wL._AC_SL1229_.jpg"]

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
  
}

function abrir() {
  document.getElementById('popup').style.display = 'block';
}


function incluir() {
 var addFilme = document.getElementById("url").value;
  if (addFilme.endsWith(".jpg")) {
    listaFilmes.push(addFilme);
  var img = document.createElement("img");
  img.src = addFilme;
  document.body.appendChild(img);
 document.getElementById('popup').style.display = 'none';
  } else{
    alert("Endereço de filme inválido") }
  document.getElementById("url").value = "";
}