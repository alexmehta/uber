$(".mobile-menu").click(function(){
    
    $('#header nav ul').toggleClass('show');
    /*note to self: make sure after toggle class not to use .*/
});

var navOffset = $('#steps').offset().top;



$(window).scroll(function(){
    
var scrollPos = $(window).scrollTop(); 
    if(scrollPos>navOffset){
        
        $('nav').addClass('dark-background')
    } else{
        
        $('nav').removeClass('dark-background')
        
    }
    
});



console.log(navOffset);