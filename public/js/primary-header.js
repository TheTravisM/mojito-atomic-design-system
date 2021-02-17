document.addEventListener("DOMContentLoaded", function() {
    let headerNavToggleBtn = $('#header-nav-toggle-btn');
    let headerNavPanel = $('#header-nav-tabpanel');
    let header = $('#corp-header');
    headerNavToggleBtn.click(function () {
        if (headerNavToggleBtn.attr('aria-expanded')=== 'false') {
            // -- toggle btn --//
            headerNavToggleBtn.addClass('open').attr('aria-expanded', 'true');
            // -- toggle Panel --//
            headerNavPanel.addClass("--active").attr('aria-hidden','false');
            //-- header --//
            header.addClass('c-header--active');
        } else {
            // -- toggle btn --//
            headerNavToggleBtn.removeClass('open').attr('aria-expanded', 'false');
            // -- toggle Panel --//
            headerNavPanel.removeClass("--active").attr('aria-hidden','true');
            //-- header --//
            header.removeClass('c-header--active');
        }
    });
    if (window.screen.width >= 768) {
        // Resolution is 1024x768 or above
        // -- toggle Panel --//
        headerNavPanel.addClass("--active").attr('aria-hidden','false');

    }
});
