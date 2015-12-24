(function() {
    'use strict';

    function OperationIndex(container) {  
        this.container = container;
        this._initDom();
        this._bindEvents();
    }
    
    OperationIndex.prototype._initDom = function() {
        var temp =  '<div class="operation-index-ctrl">' +
                        '<div class="row1">' +
                            '<div class="example1"></div>' +
                            '<div class="example2"></div>' +
                        '</div>' +

                        '<div class="row2">' +
                            '<table cellspacing="0" cellpadding="10">' +
                                '<tbody>' +
                                    '<tr class="title">' +
                                        '<td>数据总览</td>' +
                                        '<td>收入</td>' +
                                        '<td>利润率</td>' +
                                        '<td>人均投注额</td>' +
                                        '<td>人均投注次数</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                        '<td></td>' +
                                        '<td>569k</td>' +
                                        '<td>21%</td>' +
                                        '<td>420.00</td>' +
                                        '<td>82</td>' +
                                    '</tr>' +
                                '</tbody>' +
                            '</table>' +
                        '</div>' +

                        '<div class="row3">' +
                            '<table cellspacing="0" cellpadding="10">' +
                                '<tbody>' +
                                    '<tr class="title1">' +
                                        '<td></td>' +
                                        '<td class="name" colspan="2">投注数据</td>' +
                                        '<td class="name" colspan="2">用户数据</td>' +
                                        '<td class="name" colspan="5">资金数据</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                        '<td>彩种</td>' +
                                        '<td>投注金额</td>' +
                                        '<td>环比</td>' +
                                        '<td>活跃度</td>' +
                                        '<td>累计用户数</td>' +
                                        '<td>日收入</td>' +
                                        '<td>付费率</td>' +
                                        '<td>人均转入</td>' +
                                        '<td>人均转出</td>' +
                                        '<td>人均投注额</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                        '<td>重庆时时彩</td>' +
                                        '<td>6598</td>' +
                                        '<td>+107</td>' +
                                        '<td>15%</td>' +
                                        '<td>52410</td>' +
                                        '<td>5900</td>' +
                                        '<td>5900</td>' +
                                        '<td>1250.00</td>' +
                                        '<td>569.00</td>' +
                                        '<td>569.00</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                        '<td>新疆时时彩</td>' +
                                        '<td>6598</td>' +
                                        '<td>+107</td>' +
                                        '<td>15%</td>' +
                                        '<td>52410</td>' +
                                        '<td>5900</td>' +
                                        '<td>5900</td>' +
                                        '<td>1250.00</td>' +
                                        '<td>569.00</td>' +
                                        '<td>569.00</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                        '<td>日本时时彩</td>' +
                                        '<td>6598</td>' +
                                        '<td>+107</td>' +
                                        '<td>15%</td>' +
                                        '<td>52410</td>' +
                                        '<td>5900</td>' +
                                        '<td>5900</td>' +
                                        '<td>1250.00</td>' +
                                        '<td>569.00</td>' +
                                        '<td>569.00</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                        '<td>广东11选5</td>' +
                                        '<td>6598</td>' +
                                        '<td>+107</td>' +
                                        '<td>15%</td>' +
                                        '<td>52410</td>' +
                                        '<td>5900</td>' +
                                        '<td>5900</td>' +
                                        '<td>1250.00</td>' +
                                        '<td>569.00</td>' +
                                        '<td>569.00</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                        '<td>江苏快三</td>' +
                                        '<td>6598</td>' +
                                        '<td>+107</td>' +
                                        '<td>15%</td>' +
                                        '<td>52410</td>' +
                                        '<td>5900</td>' +
                                        '<td>5900</td>' +
                                        '<td>1250.00</td>' +
                                        '<td>569.00</td>' +
                                        '<td>569.00</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                        '<td>体彩排列三</td>' +
                                        '<td>6598</td>' +
                                        '<td>+107</td>' +
                                        '<td>15%</td>' +
                                        '<td>52410</td>' +
                                        '<td>5900</td>' +
                                        '<td>5900</td>' +
                                        '<td>1250.00</td>' +
                                        '<td>569.00</td>' +
                                        '<td>569.00</td>' +
                                    '</tr>' +
                                '</tbody>' +
                            '</table>' +
                        '</div>' +

                        '<div class="row4">' +
                            '<div class="left panel">' +
                                '<div class="title">投注量前5名用户</div>' +
                                '<table cellspacing="0">' +
                                    '<thead>' +
                                        '<tr>' +
                                            '<td>用户名</td>' +
                                            '<td>投注量</td>' +
                                            '<td>中奖率</td>' +
                                        '</tr>' +
                                    '</thead>' +

                                    '<tbody>' +
                                        '<tr class="odd">' +
                                            '<td>1</td>' +
                                            '<td>2</td>' +
                                            '<td>3</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>1</td>' +
                                            '<td>2</td>' +
                                            '<td>3</td>' +
                                        '</tr>' +
                                        '<tr class="odd">' +
                                            '<td>1</td>' +
                                            '<td>2</td>' +
                                            '<td>3</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>1</td>' +
                                            '<td>2</td>' +
                                            '<td>3</td>' +
                                        '</tr>' +
                                        '<tr class="odd">' +
                                            '<td>1</td>' +
                                            '<td>2</td>' +
                                            '<td>3</td>' +
                                        '</tr>' +
                                    '</tbody>' +
                                '</table>' +
                            '</div>' +

                            '<div class="middle panel">' +
                                '<div class="title">单笔奖级前5名用户</div>' +
                                '<table cellspacing="0">' +
                                    '<thead>' +
                                        '<tr>' +
                                            '<td>用户名</td>' +
                                            '<td>中奖金额</td>' +
                                            '<td>中奖率</td>' +
                                        '</tr>' +
                                    '</thead>' +

                                    '<tbody>' +
                                        '<tr class="odd">' +
                                            '<td>1</td>' +
                                            '<td>2</td>' +
                                            '<td>3</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>1</td>' +
                                            '<td>2</td>' +
                                            '<td>3</td>' +
                                        '</tr>' +
                                        '<tr class="odd">' +
                                            '<td>1</td>' +
                                            '<td>2</td>' +
                                            '<td>3</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>1</td>' +
                                            '<td>2</td>' +
                                            '<td>3</td>' +
                                        '</tr>' +
                                        '<tr class="odd">' +
                                            '<td>1</td>' +
                                            '<td>2</td>' +
                                            '<td>3</td>' +
                                        '</tr>' +
                                    '</tbody>' +
                                '</table>' +
                            '</div>' +

                            '<div class="right panel">' +
                                '<div class="title">转账额度前5名用户</div>' +
                                '<table cellspacing="0">' +
                                    '<thead>' +
                                        '<tr>' +
                                            '<td>用户名</td>' +
                                            '<td>转账金额</td>' +
                                            '<td>转账时间</td>' +
                                        '</tr>' +
                                    '</thead>' +

                                    '<tbody>' +
                                        '<tr class="odd">' +
                                            '<td>1</td>' +
                                            '<td>2</td>' +
                                            '<td>3</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>1</td>' +
                                            '<td>2</td>' +
                                            '<td>3</td>' +
                                        '</tr>' +
                                        '<tr class="odd">' +
                                            '<td>1</td>' +
                                            '<td>2</td>' +
                                            '<td>3</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>1</td>' +
                                            '<td>2</td>' +
                                            '<td>3</td>' +
                                        '</tr>' +
                                        '<tr class="odd">' +
                                            '<td>1</td>' +
                                            '<td>2</td>' +
                                            '<td>3</td>' +
                                        '</tr>' +
                                    '</tbody>' +
                                '</table>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
        
        $(temp).appendTo(this.container);

        $('.example1').highcharts({
            chart: {
                width: 600
            },
            title: {
                text: '投注量时间序列',
                x: -20 //center
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'New York',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'Berlin',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });

        $('.example2').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                width: 300
            },
            title: {
                text: '彩种投注比例'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [
                    ['重庆时时彩',   45.0],
                    ['日本时时彩',   26.8],
                    {
                        name: '新疆时时彩',
                        y: 12.8,
                        sliced: true,
                        selected: true
                    },
                    ['广东11选5',    8.5],
                    ['江苏快三',     6.2],
                    ['体彩排列三',   0.7]
                ]
            }]
        });
    };

    OperationIndex.prototype._bindEvents = function() {
    };

    OperationIndex.prototype.show = function() {
        $('.operation-index-ctrl').show();
    };

    OperationIndex.prototype.hide = function() {
        $('.operation-index-ctrl').hide();
    };  

    window.OperationIndex = OperationIndex;
}());
