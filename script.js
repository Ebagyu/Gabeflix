var listaFilmes = ["https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg", "https://br.web.img3.acsta.net/medias/nmedia/18/87/32/31/20028688.jpg", "https://br.web.img2.acsta.net/r_1280_720/img/86/51/86513ed90118b9d738e65f498c31cfdd.jpg", "https://br.web.img3.acsta.net/pictures/18/07/21/11/44/3365778.jpg", "https://asset.vg247.com/sonic-2-poster.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/sonic-2-poster.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/2/2f/6875.jpg/200px-6875.jpg", "https://br.web.img2.acsta.net/medias/nmedia/18/87/03/15/19871286.jpg", "https://www.mubis.es/media/users/7286/102979/poster-y-trailer-espanol-de-stand-by-me-doraemon-original.jpg", "https://m.media-amazon.com/images/I/71QVpL6t4wL._AC_SL1229_.jpg", "https://sm.ign.com/ign_br/screenshot/default/pixels-teaser1sheet-brazil_8pqq.jpg", "https://img.elo7.com.br/product/original/269D300/big-poster-nos-filme-lo01-tamanho-90x60-cm-presente-geek.jpg", "https://img.elo7.com.br/product/zoom/2A1A4B7/big-poster-filme-joker-coringa-joaquin-phoenix-tam-90x60-cm-nerd.jpg", "https://miro.medium.com/max/676/1*sgTx0ULi8mLjTUGGQgCDDQ.jpeg"]

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
  
}

function abrir() {
  document.getElementById('popup').style.display = 'block';
}

function fechar() {
  document.getElementById('popup').style.display = 'none';
}

function incluir() {
 var addfilme = document.getElementById("url").value;
  listaFilmes.push(addfilme);
  var img = document.createElement("img");
  img.src = addfilme;
  document.body.appendChild(img);
}