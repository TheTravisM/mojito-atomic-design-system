document.addEventListener("DOMContentLoaded", function() {
    let dropdown = $('.c-primary-nav_dropdown');
    let tabBtn = $('.c-primary-nav_tab-btn');
    let backBtn = $('.c-primary-nav_back-btn');
    let tabPanels = $('.c-primary-nav_dropdown-list');
    tabBtn.click(function () {
        // -- Tab Buttons -- //
        let activeTabBtn = $(this);
        tabBtn.removeClass('c-primary-nav_tab-btn--active').attr('aria-selected', 'false');
        activeTabBtn.addClass('c-primary-nav_tab-btn--active').attr('aria-selected', 'true');
        // -- Tab Panels -- //
        let activeTabPanel = $('#'+($(this).attr('aria-controls')));
        tabPanels.removeClass('c-primary-nav_dropdown-list--active').attr('aria-hidden', 'true');
        activeTabPanel.addClass('c-primary-nav_dropdown-list--active').attr('aria-hidden','false');
    });
    backBtn.click(function () {
        // -- Back Buttons -- //
        backBtn.removeClass('c-primary-nav_tab-btn--active').attr('aria-selected', 'false');
        // -- Tab Panels -- //
        tabPanels.removeClass('c-primary-nav_dropdown-list--active').attr('aria-hidden', 'true');
    });

    if (document.getElementById("corp-header").offsetWidth >= 768) {
        // Resolution is 1024x768 or above
        tabBtn.removeClass('c-primary-nav_tab-btn--active').attr('aria-selected', 'false');
        backBtn.removeClass('c-primary-nav_tab-btn--active').attr('aria-selected', 'false');
        tabBtn.hover(
            function() {
            // -- Tab Buttons -- //
            let activeTabBtn = $(this);
            activeTabBtn.addClass('c-primary-nav_tab-btn--active').attr('aria-selected', 'true');
            // -- Tab Panels -- //
            let activeTabPanel = $('#'+($(this).attr('aria-controls')));
            activeTabPanel.addClass('c-primary-nav_dropdown-list--active').attr('aria-hidden','false');
        },
        function() {
            // -- Tab Buttons -- //
            tabBtn.removeClass('c-primary-nav_tab-btn--active').attr('aria-selected', 'false');
            // -- Tab Panels -- //
            tabPanels.removeClass('c-primary-nav_dropdown-list--active').attr('aria-hidden', 'true');
        });
    }
});
