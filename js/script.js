const _portfolio= document.querySelector('.sec-portfolio-js');

_portfolio.addEventListener('click',(e)=>{
    console.log(e.target.classList);
    if(e.target.classList.contains('img-btn-modal-js')){
        alert('sisoy')
    }
})