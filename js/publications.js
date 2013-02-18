$(function() {
    $.get('publications.bib', function(result) {
        $('#bibtex_input').append(result);
        bibtex_js_draw();
    });

});

