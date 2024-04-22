//banner atual
// ------------------- carrossel banner ---------------- //

// capturar os btns direita e esquerda
const btnRight = document.querySelector('.fa-chevron-circle-right');
const btnLeft = document.querySelector('.fa-chevron-circle-left');

//guardando as imagens do banner direito
let rightBanner = document.querySelectorAll('.right-banner')
let currentBanner = 0;

console.log(currentBanner)

btnRight.addEventListener('click', () => {

    if (currentBanner == 0) {
        rightBanner[currentBanner].innerHTML = '<img src="./assets/img/virado_a_paulista.png" alt="paulista">'
        currentBanner++;
    }
    else {
        currentBanner = 0
        rightBanner[currentBanner].innerHTML = '<img src="./assets/img/feijoada_banner.png" alt="feijoada">'
    }



})

btnLeft.addEventListener('click', () => {

    if (currentBanner >= 0) {
        rightBanner[currentBanner].innerHTML = '<img src="./assets/img/virado_a_paulista.png" alt="paulista">'
        currentBanner--;


    } else {

        currentBanner = 0;
        rightBanner[currentBanner].innerHTML = '<img src="./assets/img/feijoada_banner.png" alt="feijoada">'

    }

})

