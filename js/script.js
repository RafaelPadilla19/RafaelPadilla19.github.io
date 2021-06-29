const _portfolio= document.querySelector('.sec-portfolio-js');
const _modalImgPortfolio= document.querySelector('.img-modal-js');

_portfolio.addEventListener('click',(e)=>{
    if(e.target.classList.contains('img-btn-modal-js')){
        //src atributo
        let urlImg= e.target.attributes[0].nodeValue;
        _modalImgPortfolio.src=urlImg;

    }
});


