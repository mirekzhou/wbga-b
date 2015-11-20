(function () {
    'use strict';

    function initI18next (lang) {
        var localePath  = '../data/i18n/';
        var browserLang = navigator.language || navigator.userLanguage;
        var storageLang = localStorage.getItem('*lang');
        var l           = lang || storageLang || browserLang.toLowerCase();
        
        var options = {
            sendType: 'GET',
            lng: l,
            resGetPath: localePath + l + '.json',
            useLocalStorage: false,
            getAsync: false
        };
        
        if (i18n.lng() && i18n.lng() === lang) {
            return;
        }
        
        if(i18n.lng()) {
            i18n.setLng(lang, options);
        } else {
            i18n.init(options);
        }
        
        if (localStorage) {
            localStorage.setItem('*lang', l);
        }

        $('.login-page').i18n();
    }

    function initPlaceHolder () {
        $('input, textarea').placeholder();
    }

    function initIE8() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        
        if (msie > 0) {
            if (ua.substring(msie + 5, msie + 8) === '8.0') {
                $('body').addClass('ie8');
            }
        }
    }

    function bindEvents() {
        $('.language').delegate('span.lan-item', 'click', function() {
            initI18next($(this).attr('data-i18n'));
        });

        $('.sign-in').click(function() {
            window.location.href='backend.html';
        });
    }
    
    initI18next();
    initPlaceHolder();
    initIE8();
    bindEvents();
})();


