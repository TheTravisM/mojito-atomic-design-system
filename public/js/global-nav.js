document.addEventListener("DOMContentLoaded", function() {
    let tabBtn = $('.c-global-nav_tab-btn');
    let backBtn = $('.c-global-nav_back-btn');
    let tabPanels = $('.c-global-nav_dropdown-list');
    tabBtn.click(function () {
        // -- Tab Buttons -- //
        let activeTabBtn = $(this);
        tabBtn.removeClass('c-global-nav_tab-btn--active').attr('aria-selected', 'false');
        activeTabBtn.addClass('c-global-nav_tab-btn--active').attr('aria-selected', 'true');
        // -- Tab Panels -- //
        let activeTabPanel = $('#'+($(this).attr('aria-controls')));
        tabPanels.removeClass('c-global-nav_dropdown-list--active').attr('aria-hidden', 'true');
        activeTabPanel.addClass('c-global-nav_dropdown-list--active').attr('aria-hidden','false');
    });
    backBtn.click(function () {
        // -- Back Buttons -- //
        backBtn.removeClass('c-global-nav_tab-btn--active').attr('aria-selected', 'false');
        // -- Tab Panels -- //
        tabPanels.removeClass('c-global-nav_dropdown-list--active').attr('aria-hidden', 'true');
    });
    if (document.getElementById("corp-header").offsetWidth >= 768) {
        // Resolution is 1024x768 or above
        tabBtn.removeClass('c-global-nav_tab-btn--active').attr('aria-selected', 'false');
        backBtn.removeClass('c-global-nav_tab-btn--active').attr('aria-selected', 'false');
        tabBtn.hover(
            function() {
                // -- Tab Buttons -- //
                let activeTabBtn = $(this);
                activeTabBtn.addClass('c-global-nav_tab-btn--active').attr('aria-selected', 'true');
                // -- Tab Panels -- //
                let activeTabPanel = $('#'+($(this).attr('aria-controls')));
                activeTabPanel.addClass('c-global-nav_dropdown-list--active').attr('aria-hidden','false');
            },
            function() {
                // -- Tab Buttons -- //
                tabBtn.removeClass('c-global-nav_tab-btn--active').attr('aria-selected', 'false');
                // -- Tab Panels -- //
                tabPanels.removeClass('c-global-nav_dropdown-list--active').attr('aria-hidden', 'true');
        });
    }
});
