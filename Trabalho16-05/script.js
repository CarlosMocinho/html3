const lugares = [
    {
        nome: "Paris",
        imagem: "Paris.jpg",
        descricao: "A cidade do amor e da Torre Eiffel."
    },
    {
        nome: "Bali",
        imagem: "Bali.jpg",
        descricao: "A cidade mais horiental que você vera na sua vida"
    },
    {
        nome: "Tokyo",
        imagem: "Tokyo.jpg",
        descricao: "Andar por seus bairos é algo unico"
    },
    {
        nome: "Roma",
        imagem: "Roma.jpg",
        descricao: "A cidade original de todos os filosofos"
    },
    {
        nome: "Aurora",
        imagem: "Aurora.jpg",
        descricao: "Localizada na Groelandia é um belo visual natural"
    },
    
];

const lugaresContainer = document.getElementById("lugares");

lugares.forEach((lugar) => {
    const lugarDiv = document.createElement("div");
    lugarDiv.classList.add("lugar");

    const imagem = document.createElement("img");
    imagem.src = lugar.imagem;
    imagem.alt = lugar.nome;

    const titulo = document.createElement("h2");
    titulo.textContent = lugar.nome;

    const descricao = document.createElement("p");
    descricao.textContent = lugar.descricao;

    lugarDiv.appendChild(imagem);
    lugarDiv.appendChild(titulo);
    lugarDiv.appendChild(descricao);

    lugaresContainer.appendChild(lugarDiv);
});

// Exibir todas as imagens no console
const todasAsImagens = document.querySelectorAll("img");
console.log("Todas as imagens:", todasAsImagens);
