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
        window.scrollTo(0, 0);
    };
    updatePage();
    $(window).bind("hashchange", updatePage);

    var mfpParams = {
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        }
    }
    $('.popup-gallery-p1').magnificPopup(mfpParams);
    $('.popup-gallery-p2').magnificPopup(mfpParams);
    $('.popup-gallery-p3').magnificPopup(mfpParams);
    $('.popup-gallery-p4').magnificPopup(mfpParams);
    $('.popup-gallery-p5').magnificPopup(mfpParams);

    $('.popup-gallery-r1').magnificPopup(mfpParams);
    $('.popup-gallery-r2').magnificPopup(mfpParams);
    $('.popup-gallery-r3').magnificPopup(mfpParams);

}));
