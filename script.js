function fazGET(https://api-site.amhp.com.br/api/banners/publicados){
    let request = new XMLHttpRequest()
    request.open("GET", https://api-site.amhp.com.br/api/banners/publicados , false)
    request.send()
}

function main(){
    data = fazGET(https://api-site.amhp.com.br/api/banners/publicados)
    banner = JSON.parse(data)
}