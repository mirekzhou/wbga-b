(function () {
    'use strict';

    var container                = $('.content .container');
    var features                 = {};
    features.queryBets           = new QueryBets(container);
    features.queryAdditionalBets = new QueryAdditionalBets(container);
    features.queryTransfers      = new QueryTransfers(container);
    features.dataAnalysis        = new DataAnalysis(container);
    features.operationIndex      = new OperationIndex(container);

    function getDocHeight(iframe) {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }
    
    function resize() {
        var height = getDocHeight($('#myiframe')[0]) + 300;
        $('#myiframe').css('height',height);
    }

    function showIframe() {
        $('#myiframe').show();
        resize();
    }

    function hideAllFeatures() {
        var key;
        $('#myiframe').hide();

        for(key in features) {
            features[key].hide();
        }
    }

    function bindEvents() {
        var featureName;
        $('.sign-out').click(function() {
            window.location.href='login.html';
        });
        
        $('.backend-page .toggle-feature ul').delegate('li', 'click', function() {
            featureName = $(this).children('a').attr('feature-name');
            hideAllFeatures();

            if (featureName === 'operationLecture') {
                showIframe();
            } else {
                features[featureName].show();
            }
            
            $('input, textarea').placeholder();
        });
    }

    function init() {
        Util.initI18next();
        Util.initPlaceHolder();
        Util.initIE8();
        resize();
        bindEvents();
    }

    init();
})();


