/* 
    参数
*/
var debug = false;      //debug模式
var visitPageUrl = '/api/bmt/index/visitPage'   // visitPage 接口地址
var defaultParams = {
    url: '/api/bmt/index/hotpoint',     //统计热点接口地址
    des: '武侠风',
    route: 'wuxiafeng'
}

var tool = {
    //获取url参数
    getUrlParam: function (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null
    },
    //判断是否是安卓
    isAndroid: function () {
        var u = navigator.userAgent;
        if(u.indexOf('Android') > -1 || u.indexOf('Adr') > -1){
            return true;
        }else{
            return false;
        }
    },
    visitNum: function (url, route) {
        $.ajax({
            url: url,
            dataType: 'json',
            data: {route_page: route, gid: tool.getUrlParam('id'), code: tool.getUrlParam('qd')},
            success: function () {
                console.log('visitPage');
            }
        });
    },
    // 按钮点击事件
    buttonClick: function(name) {
        var _this = this
        if (debug) {
            console.log(name)
        } else {
            $.get(defaultParams.url,{
                gid: _this.getUrlParam('id'),
                url: window.location.href,
                des: defaultParams.des,
                qd_code: _this.getUrlParam('qd'),
                name: name,
                route: defaultParams.route
            },function(res){
                if(tool.isAndroid()) {
                    window.location.href = '/api/h5/download/down/id/40/qd/'+tool.getUrlParam('qd');
                }else{
                    window.location.href = '/play/view/index.html?id=10095&from=platform&qd_code='+tool.getUrlParam('qd');
                }
            },'JSON')
        }
    },
    domClick(dom,name) {
        var _this = this
        $(dom).click(function(event){
            event.stopPropagation()
            _this.buttonClick(name)
        })
    }

}
tool.visitNum(visitPageUrl,'wuxiafeng');  // visitpage ajax


// 空白
tool.domClick('body','空白');
// 头部下载按钮
tool.domClick('.header-download','头部下载按钮');
// 神奇模块
tool.domClick('.shenqi-block','神器模块');
// vip模块
tool.domClick('.vip-block','vip模块');
// 玩法模块
tool.domClick('.wanfa-block','玩法模块');
// 评论模块
tool.domClick('.commit-block','评论模块');

tool.domClick('.download-one-one','1s下载中间的');
tool.domClick('.download-get','立即领取');
tool.domClick('.download-one-two','1s下载下面的');









if(window.location.href.indexOf('t=uc') !== -1){
    $('.rule-bottom.foot-uc').css('display', 'block');
}else if(window.location.href.indexOf('t=baidu') !== -1){
    $('.rule-bottom.foot-bd').css('display', 'block');
}

// 动画
var defaultLeft = 0.87;
setInterval(function(){
    if (defaultLeft > 5) {
        defaultLeft = 0.87
    } else {
        defaultLeft += 1.58;
    }
    $('.weapon-animation').css('left',defaultLeft+'rem')
},500)


