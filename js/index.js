const carouselInner = document.querySelector(".carousel-inner");
const api = 'https://api-site.amhp.com.br/api/banners/publicados';

$.ajax({
    url: api,
    type: 'GET',
    success: function(data) {
        let carouselItem = '';

        data.forEach((item) => {
            if(item.ordenacao >= 0) {
                carouselItem += `<div class="carousel-item active">
                                    <img src="data:image/png;base64, ${item.imagem}" class="d-block w-100" alt="${item.titulo}">
                                </div>`;
            } else {
                carouselItem += `<div class="carousel-item">
                                    <img src="data:image/png;base64, ${item.imagem}" class="d-block w-100" alt="${item.titulo}">
                                </div>`;
            }
      
        }); 

        let div = document.createElement('div');
        div.innerHTML = carouselItem;
        carouselInner.append(div);       
   }
  });

  const carousel = document.querySelector(".slide")
  let carouselSlide = new bootstrap.Carousel(carousel, {
    interval: 1000
  });