$(document).ready(function() {

    var updatePage = function() {
        $('.section').hide();

        switch (window.location.hash) {
            case "#news": {
                $('#sct-news').show();
                break;
            }
            case "#blog": {
                $('#sct-blog').show();
                break;
            }
            case "#projects": {
                $('#sct-projects').show();
                break;
            }
            case "#about": {
                $('#sct-about').show();
                break;
            }
            case "#contact": {
                $('#sct-contact').show();
                break;
            }
            case "#resume": {
                $('#sct-resume').show();
                break;
            }
            default: {
                $('#sct-landing').show();
                break;
            }
        }
    };

    updatePage();
    $(window).bind("hashchange", updatePage);
});
