(function() {
    'use strict';

    function Util(container) {}

    Util.prototype.initPlaceHolder = function(lang) {
        $('input, textarea').placeholder();
    }
    
    Util.prototype.initIE8 = function(lang) {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        
        if (msie > 0) {
            if (ua.substring(msie + 5, msie + 8) === '8.0') {
                $('body').addClass('ie8');
            }
        }
    }
    
    Util.prototype.initI18next = function(lang) {
        var localePath  = '../data/i18n/';
        var browserLang = navigator.language || navigator.userLanguage;
        var storageLang = localStorage.getItem('*lang').split('_').join('-');
        var l           = lang || storageLang|| browserLang.toLowerCase();
        
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

        $('body').i18n();
    }

    window.Util = new Util();
}());
