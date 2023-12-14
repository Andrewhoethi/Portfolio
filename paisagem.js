function mudarImagem(){

    let input = document.getElementById("momento").value.toLocaleLowerCase();
    let imagem = document.getElementById("imagem");


if (input === "manhã"){
    imagem.src = "manhã.jpg"
    imagem.alt = "paisagem manhã"

} else if(input === "tarde"){
    imagem.src = "tarde.jpg"
    imagem.alt = "paisagem de tarde"

}else if (input === "noite"){
    imagem.src = "noite.jpg"
    imagem.alt = "paisagem de noite"
}}
