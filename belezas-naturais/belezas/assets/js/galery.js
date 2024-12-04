// Seleciona o elemento principal da imagem
const mainImage = document.getElementById("main-image");

// Seleciona todas as miniaturas
const thumbnails = document.querySelectorAll(".gallery img");

// Adiciona um evento de clique a cada miniatura
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        // Atualiza a imagem principal com o src da miniatura clicada
        mainImage.src = thumbnail.src;
        mainImage.alt = thumbnail.alt;
    });
});
