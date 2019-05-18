function toggleHidden(selector){
    $(selector).toggleClass("hidden");
}

function toggleHamburger(){
    $('.nav-hamberger').click(function(){
        toggleHidden('.mobile-menu');
    })
}

$(toggleHamburger);