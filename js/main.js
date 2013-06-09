($(document).ready(function() {

    var updatePage = function() {
        $('section').hide();

        switch (window.location.hash) {
            case "#news": {
                $('#sct-news').show();
                window.document.title = "Nic Nilov | News";
                break;
            }
            case "#blog": {
                $('#sct-blog').show();
                window.document.title = "Nic Nilov | Blog";
                break;
            }
            case "#projects": {
                $('#sct-projects').show();
                window.document.title = "Nic Nilov | Projects";
                break;
            }
            case "#about": {
                $('#sct-about').show();
                window.document.title = "Nic Nilov | About me";
                break;
            }
            case "#contact": {
                $('#sct-contact').show();
                window.document.title = "Nic Nilov | Contact";
                break;
            }
            case "#resume": {
                $('#sct-resume').show();
                window.document.title = "Nic Nilov | Resume";
                break;
            }
            default: {
                $('#sct-landing').show();
                window.document.title = "Nic Nilov | Personal website";
                break;
            }
        }
    };

    updatePage();
    $(window).bind("hashchange", updatePage);
}));
