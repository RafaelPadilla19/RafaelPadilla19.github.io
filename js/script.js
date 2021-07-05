// Para mostrar la misma imagen del la seccion portafolio en el modal

/* const _portfolio= document.querySelector('.sec-portfolio-js');
const _modalImgPortfolio= document.querySelector('.img-modal-js');

_portfolio.addEventListener('click',(e)=>{
    if(e.target.classList.contains('img-btn-modal-js')){
        //src atributo
        let urlImg= e.target.attributes[0].nodeValue;
        _modalImgPortfolio.src=urlImg;

    }
}); */

// Cerrar un video al cerrar un modal.


let btnCerrar = document.getElementById('btn-close');
btnCerrar.addEventListener('click',()=>{

    let video= document.getElementById('video_youtube');
    let urlVideo= video.src;

    video.src='';
    video.src=urlVideo;
});

let modal= document.getElementById('modal-portfolio');
modal.addEventListener('click',()=>{

    let video= document.getElementById('video_youtube');
    let urlVideo= video.src;

    video.src='';
    video.src=urlVideo;
    
});