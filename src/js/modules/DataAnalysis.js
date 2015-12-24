(function() {
    'use strict';

    function DataAnalysis(container) {  
        this.container = container;
        this._initDom();
    }
    
    DataAnalysis.prototype._initDom = function() {
        var temp =  '<div class="data-analysis-ctrl">' +
                        '<div class="row1">' +
                            '<div class="left panel">' +
                                '<div class="chart1"></div>' +
                            '</div>' +
                            '<div class="middle panel">' +
                                '<div class="chart2"></div>' +
                            '</div>' +
                            '<div class="right panel">' +
                                '<div class="chart3"></div>' +
                            '</div>' +
                            '<div class="clear"></div>' +
                        '</div>' +

                        '<div class="row2">' +
                            '<div class="left panel">' +
                                '<div class="title">奖期</div>' +
                                '<table cellspacing="0" cellpadding="5">' +
                                    '<thead>' +
                                        '<tr>' +
                                            '<td>奖期</td>' +
                                            '<td>本期投注额</td>' +
                                            '<td>本期玩家</td>' +
                                        '</tr>' +
                                    '</thead>' +

                                    '<tbody>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                    '</tbody>' +
                                '</table>' +
                                '<div class="foot">更多&gt;&gt;</div>' +
                            '</div>' +
                            '<div class="middle panel">' +
                                '<div class="title">奖金</div>' +
                                '<table cellspacing="0" cellpadding="5">' +
                                    '<thead>' +
                                        '<tr>' +
                                            '<td>奖期</td>' +
                                            '<td>本期奖金</td>' +
                                            '<td>中奖玩家</td>' +
                                        '</tr>' +
                                    '</thead>' +

                                    '<tbody>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                    '</tbody>' +
                                '</table>' +
                                '<div class="foot">更多&gt;&gt;</div>' +
                            '</div>' +
                            '<div class="right panel">' +
                                '<div class="title">玩家排名</div>' +
                                '<table cellspacing="0" cellpadding="5">' +
                                    '<thead>' +
                                        '<tr>' +
                                            '<td>玩家</td>' +
                                            '<td>总投注额</td>' +
                                            '<td>收入</td>' +
                                        '</tr>' +
                                    '</thead>' +

                                    '<tbody>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                    '</tbody>' +
                                '</table>' +
                                '<div class="foot">更多&gt;&gt;</div>' +
                            '</div>' +
                            '<div class="clear"></div>' +
                        '</div>' +

                        '<div class="row3">' +
                            '<div class="left panel">' +
                                '<div class="title">玩法排名</div>' +
                                '<table cellspacing="0" cellpadding="5" cellspacing="10">' +
                                    '<thead>' +
                                        '<tr>' +
                                            '<td>奖期</td>' +
                                            '<td>累计投注量</td>' +
                                            '<td>玩家</td>' +
                                        '</tr>' +
                                    '</thead>' +

                                    '<tbody>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                    '</tbody>' +
                                '</table>' +
                                '<div class="foot">更多&gt;&gt;</div>' +
                            '</div>' +
                            '<div class="middle panel">' +
                                '<div class="title">转账排名</div>' +
                                '<table cellspacing="0" cellpadding="5">' +
                                    '<thead>' +
                                        '<tr>' +
                                            '<td>转账金额</td>' +
                                            '<td>转账方向</td>' +
                                            '<td>日期</td>' +
                                        '</tr>' +
                                    '</thead>' +

                                    '<tbody>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>20150910-41</td>' +
                                            '<td>658，698.00</td>' +
                                            '<td>96</td>' +
                                        '</tr>' +
                                    '</tbody>' +
                                '</table>' +
                                '<div class="foot">更多&gt;&gt;</div>' +
                            '</div>' +
                            '<div class="right panel">' +
                                '<div class="title">公告</div>' +
                                '<div class="content">' +
                                    '<p>重庆时时彩 10小时</p>' +
                                    '<p>开市时间 8：00AM</p>' +
                                    '<p>休市时间 18：00PM</p>' +
                                    '<p class="info">尊敬的商家用户，我们将在2015年11月25日11:56时进行系统升级，届时将无法提供数据服务，请知晓。</p>' +
                                    '<p class="team">- WBG研发团队</p>' +
                                '</div>' +
                            '</div>' +
                            '<div class="clear"></div>' +
                        '</div>'
                    '</div>';

        $(temp).appendTo(this.container);

        $('.chart1').highcharts({
            chart: {
                width: 200,
                height: 380
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

        $('.chart2').highcharts({
            chart: {
                width: 200,
                height: 380
            },
            title: {
                text: '用户变化时间序列',
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

        $('.chart3').highcharts({
            chart: {
                width: 200,
                height: 380
            },
            title: {
                text: '营收状态',
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

    };

    DataAnalysis.prototype.show = function() {
        $('.data-analysis-ctrl').show();
    };  

    DataAnalysis.prototype.hide = function() {
        $('.data-analysis-ctrl').hide();
    };  

    window.DataAnalysis = DataAnalysis;
}());
