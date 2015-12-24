(function () {
    'use strict';

    function bindEvents() {
        $('.language').delegate('span.lan-item', 'click', function() {
            Util.initI18next($(this).attr('data-i18n'));
        });

        $('.sign-in').click(function() {
            window.location.href='backend.html';
        });
    }
    
    function init() {
        Util.initI18next();
        Util.initPlaceHolder();
        Util.initIE8();
        bindEvents();
    }

    init();
})();


