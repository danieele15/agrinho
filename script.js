function alternarTema() {
    const imagem = document.getElementById("imagem");
    if (imagem.src.includes("campo.jpg")) {
        imagem.src = "cidade.jpg";
    } else {
        imagem.src = "campo.jpg";https://www.quintoandar.com.br/guias/wp-content/uploads/2024/01/vantagens-de-morar-em-cidade-grande.webp
    }
}
