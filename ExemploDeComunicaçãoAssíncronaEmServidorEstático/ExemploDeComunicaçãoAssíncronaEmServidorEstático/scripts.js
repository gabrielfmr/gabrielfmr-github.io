let item = 0;       //contador de imagens solicitadas
const max = 91;     //quantidade de imagens
const updateRate = 10000;        //taxa de atualização automática em segundos

function proxImagem( img ){          //solicita nova imagem via fetch()
    fetch("img/" + img + ".jpg")
        .then(resp => resp.blob())
        .then(blob => {
            const imageObjectURL = URL.createObjectURL(blob);       //cria endereço da imagem
            console.log(imageObjectURL);
            const proxImg = document.createElement("img");
            proxImg.src = imageObjectURL;
            document.getElementById("placeholder").appendChild(proxImg);
        })
}

window.onload = setInterval(function(){
    proxImagem( item++ % (max+1));
    let scrollPoint = window.scrollY + window.innerHeight;
    window.scrollTo({top: scrollPoint, behavior: "smooth"});
}, updateRate);

window.onload = function(){
    for( item = 0; item < 5; item++){
        proxImagem(item);
    }
}