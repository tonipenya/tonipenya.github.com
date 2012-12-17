$(function() {
    $.get('publications.bib', function(result) {
        $('#bibtex_input').append(result);
        bibtex_js_draw();

//        $('.expand').click(function(){
//            $(this).hide();    
//            $(this).siblings('.abstract').show();
//            $(this).siblings('.collapse').show();
//        });
//
//        $('.collapse').click(function(){
//            $(this).hide();    
//            $(this).siblings('.abstract').hide();
//            $(this).siblings('.expand').show();
//        });
    });

});

