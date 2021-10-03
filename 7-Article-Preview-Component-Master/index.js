$( '.share-icon-div' ).on('click', function(){
    var footer = $('.footer-section');  
    footer.addClass("hidden");
    $('.down-arrow').toggleClass('hidden');
    $('.share-div').toggleClass('change-color');
    $('.share-icon-profile').toggleClass('change-icon-color');
    
});
$( '.share-div' ).on('click', function(){
    var footer = $('.footer-section');
    footer.toggleClass('hidden');
    $('.down-arrow').toggleClass('hidden');
    $('.share-div').toggleClass('change-color');
    $('.share-icon-profile').toggleClass('change-icon-color');
});
