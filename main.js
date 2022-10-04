function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(banner) {
    console.log(banner)
    linha = document.createElement("tr");

    tdId = document.createElement("th");
    tdTitulo = document.createElement("th");
    tdLink = document.createElement("th");
    tdData = document.createElement("th");

    tdId.innerHTML = banner.id
    tdTitulo.innerHTML = banner.titulo
    tdData.innerHTML = banner.dataPublicacao
    tdLink.innerHTML = banner.linkRedirecionamento

    linha.appendChild(tdId);
    linha.appendChild(tdTitulo);
    linha.appendChild(tdLink);
    linha.appendChild(tdData);

    return linha;
}

function main() {
    let data = get("https://api-site.amhp.com.br/api/banners/publicados");
    let banners = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    banners.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

main()