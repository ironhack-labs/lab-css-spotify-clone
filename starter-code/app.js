$(window).on('scroll', parallax);

let ultimoScroll = 0;

function parallax() {
    
    let scrollActual = $(window).scrollTop();
    
    if (scrollActual > ultimoScroll) {
        
        $('nav').addClass('oculto');
        
    } else {
        
        $('nav').removeClass('oculto');
        
    }
    
    ultimoScroll = scrollActual;
}