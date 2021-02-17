document.addEventListener("DOMContentLoaded", function() {
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
        tabPanels.removeClass('ceng-tabs_panel--active').attr('aria-hidden', 'true');
        activeTabPanel.addClass('ceng-tabs_panel--active').attr('aria-hidden','false');
    });
    backBtn.click(function () {
        // -- Back Buttons -- //
        backBtn.removeClass('c-primary-nav_tab-btn--active').attr('aria-selected', 'false');
        // -- Tab Panels -- //
        tabPanels.removeClass('ceng-tabs_panel--active').attr('aria-hidden', 'true');
    });
});
