function alternarTema() {
    const imagem = document.getElementById("imagem");
    if (imagem.src.includes("campo.jpg")) {
        imagem.src = "cidade.jpg";
    } else {
        imagem.src = "campo.jpg";
    }
}
