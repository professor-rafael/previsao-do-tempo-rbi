let chave = "cebcd482eda57fa9a6714c1c2ba91885";

function colocarNaTela(dados) {
    console.log(dados);
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".descricao").innerHTML = dados.weather[0].description;
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}

async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
        cidade + 
        "&appid=" + 
        chave + 
        "&lang=pt_br" +
        "&units=metric"
    )
    .then(resposta => resposta.json());

    if (dados.cod === 200) {
        colocarNaTela(dados);
    } else {
        console.error("Cidade não encontrada: " + dados.message);
    }
}

function cliqueiNoBotao() {
    // Altere para o nome da cidade Rio Branco do Ivaí
    let cidade = "Rio Branco do Ivaí, BR";
    
    buscarCidade(cidade);
}
