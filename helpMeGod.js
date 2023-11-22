const banner = document.querySelector(".carousel-inner");
console.log(banner)

function fazerGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function main(){
    data = fazerGet("https://api-site.amhp.com.br/api/banners/publicados");
    resposta = JSON.parse(data);
    let innerElement = '';
    
    resposta.forEach(element => {
        innerElement += `<div class="carousel-item">
        <img src="${element.urlImagemDesktop}" class="d-block w-100" alt="...">
      </div>`;
      console.log(innerElement)
        
    });
    let div = document.createElement('div');
    div.innerHTML = innerElement;
    banner.appendChild(div);
}

main()
const carousel = document.querySelector(".slide")
  let carouselSlide = new bootstrap.Carousel(carousel, {
    interval: 5000
  });
