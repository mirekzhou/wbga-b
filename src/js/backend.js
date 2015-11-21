(function () {
    'use strict';

    var queryBets           = new QueryBets($('.content .container'));
    var queryAdditionalBets = new QueryAdditionalBets($('.content .container'));
    var queryTransfers      = new QueryTransfers($('.content .container'));
    var lotterysManagement  = new LotterysManagement($('.content .container'));

    function initI18next (lang) {
        var localePath  = '../data/i18n/';
        var browserLang = navigator.language || navigator.userLanguage;
        var storageLang = localStorage.getItem('*lang');
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

        $('.backend-page').i18n();
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

    function showIframe() {
        $('#myiframe').show();
    }

    function bindEvents() {
        $('.sign-out').click(function() {
            window.location.href='login.html';
        });
        
        $('.backend-page .toggle-feature ul').delegate('li', 'click', function() {
            var tar = $(this).children('a');
            if (tar.attr('class') === 'q1') {
                queryAdditionalBets.hide();
                queryTransfers.hide();
                lotterysManagement.hide();
                $('#myiframe').hide();
                queryBets.show();
            } else if (tar.attr('class') === 'q2') {
                queryBets.hide();
                queryTransfers.hide();
                lotterysManagement.hide();
                $('#myiframe').hide();
                queryAdditionalBets.show();
            } else if (tar.attr('class') === 'q3') {
                queryBets.hide();
                queryAdditionalBets.hide();
                lotterysManagement.hide();
                $('#myiframe').hide();
                queryTransfers.show();
            } else if (tar.attr('class') === 'q4') {
                queryBets.hide();
                queryAdditionalBets.hide();
                queryTransfers.hide();
                $('#myiframe').hide();
                lotterysManagement.show();
            } else if (tar.attr('class') === 'q5') {
                queryBets.hide();
                queryAdditionalBets.hide();
                queryTransfers.hide();
                lotterysManagement.hide();
                showIframe();
            }
            $('input, textarea').placeholder();
        });
    }

    initI18next();
    initPlaceHolder();
    initIE8();
    bindEvents();
})();


