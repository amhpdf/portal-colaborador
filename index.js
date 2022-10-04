//const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=90'
const url = 'https://api-site.amhp.com.br/api/banners/publicados'

function getNames(){
    fetch(url)
        .then(response => response.json())
        .then(data => {

            data.map((item) => {
                const list = document.querySelector('#banner');

                const card = document.createElement('div')
                const titulo = document.createElement('h2');
                const id = document.createElement('p');
                const dataP = document.createElement('p');
                const dataE = document.createElement('p');
                const ordenacao = document.createElement('p');
                var linkText = document.createTextNode("link Redirecionamento");
                const pdf = document.createElement('a');
                const icon = document.createElement('img');

                titulo.textContent = item.titulo; 
                id.textContent = `id: ${item.id}`;
                dataP.textContent = ` data publicação: ${item.dataPublicacao}`;
                dataE.textContent = ` data expiração: ${item.dataExpiracao}`;
                ordenacao.textContent = ` ordenação: ${item.ordenacao}`;
                icon.src = item.imagem

                pdf.appendChild(linkText);
                pdf.href = item.linkRedirecionamento

                card.setAttribute('id', "card")

                card.appendChild(titulo)
                card.appendChild(id)
                card.appendChild(ordenacao)
                card.appendChild(dataP)
                card.appendChild(dataE)
                card.appendChild(pdf)
                card.appendChild(icon)

                list.appendChild(card)
            })
        })
        .catch(error => console.log(error))
}

getNames()