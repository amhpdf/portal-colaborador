const APIurl = "https://api-site.amhp.com.br/api/banners/publicados"

const corrossel = document.querySelector(".corrossel")
const corrosselLink = document.querySelector(".carrosselPage")
const bannerTitle = document.querySelector(".bannerTitle")
const bannerSubTitle = document.querySelector(".bannerSubTitle")
// Tive dificuldade em relação as imagens, pois não consegui transformar o txt em outro para img
const bannerImg = document.querySelector(".bannerImg")

const arrowLeft = document.querySelector("#slideArrowPrev")
const arrowRight = document.querySelector("#slideArrowNext")

let APIdata = []
let bannerPosition = 0

// Função que busca informaões na URL
const fetchAPI = async () => {
    const packageReponse = await fetch(APIurl)
    const data = await packageReponse.json()

    // console.log(data)

    return data
}

// Função que espera as informações serem carregadas para atribuir no HTML
const getData = async (banner) => {
    const data = await fetchAPI(banner)

    APIdata = data
    console.log(APIdata)

    corrosselLink.style.display = "inline-block"
    bannerTitle.innerHTML = APIdata[bannerPosition].titulo
    bannerSubTitle.innerHTML = APIdata[bannerPosition].subtitulo

    if (APIdata[bannerPosition].linkRedirecionamento == null) {
        // corrosselLink.innerHTML = "Conteúdo não disponível"
        corrosselLink.style.display = "none"
    } else {
        corrosselLink.innerHTML = `<a href="${APIdata[bannerPosition].linkRedirecionamento}">Acesse o conteúdo</a>`
    }
    

}

getData()

// Carrossel para esquerda
arrowLeft.addEventListener("click",  ()=>{
    if (bannerPosition > 0) {
        bannerPosition--
    } else{
        bannerPosition = APIdata.length - 1
    }
    getData()
    console.log(bannerPosition)
})

// Carrossel para direita
arrowRight.addEventListener("click",  ()=>{
    if (bannerPosition < APIdata.length - 1) {
        bannerPosition++
    } else{
        bannerPosition = 0
    }
    getData()
    console.log(bannerPosition)
})