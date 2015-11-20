(function() {
    'use strict';

    function LotterysManagement(container) {  
        this.container = container;
        this.lotterys1 = [
            {'text': '重庆时时彩', 'value': 1},
            {'text': '日本时时彩', 'value': 2},
            {'text': '江西时时彩', 'value': 3},
            {'text': '新疆时时彩', 'value': 4},
            {'text': '江西11选5', 'value': 5},
            {'text': '广东11选5', 'value': 6},
            {'text': '山东11选5', 'value': 7},
            {'text': '重庆11选5', 'value': 8},
            {'text': '江苏快3', 'value': 9},
            {'text': '北京PK10', 'value': 10}
        ];
        
        this.lotterys2 = [
            {'text': '排列三', 'value': 11},
            {'text': '3D福彩', 'value': 12}
        ];
        
        this._initDom();
        this._bindEvents();
    }

    LotterysManagement.prototype._initDom = function() {
        var temp =  '<div class="lotterys-management">' +
                        '<div class="high-frequencey">' +
                            '<div class="title" data-i18n="high-frequencey-lotterys"></div>' +
                            '<div class="items">' +
                                this._generateItems(this.lotterys1) +
                                '<div class="clear"></div>' +
                            '</div>'+
                        '</div>' +
                
                         '<div class="low-frequencey">' +
                            '<div class="title" data-i18n="low-frequencey-lotterys"></div>' +
                            '<div class="items">' +
                                this._generateItems(this.lotterys2) +
                                '<div class="clear"></div>' +
                            '</div>'+
                        '</div>' +

                        '<button data-i18n="add-lotterys"></button>' +
                    '</div>';
        
        $(temp).appendTo(this.container);
    };

    LotterysManagement.prototype._generateItems = function(lotterys) {
        var i;
        var temp = '';
        for (i = 0; i < lotterys.length; i++) {
            temp += '<label class="item" data-value="' + lotterys[i].value + '"><input type="checkbox" />' + lotterys[i].text + '</label>';
        }
        return temp;
    };

    LotterysManagement.prototype._bindEvents = function() {
    };

    LotterysManagement.prototype.show = function() {
        $('.lotterys-management').show();
    };  

    LotterysManagement.prototype.hide = function() {
        $('.lotterys-management').hide();
    };  

    window.LotterysManagement = LotterysManagement;
}());
