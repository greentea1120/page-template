
var page = {
    init: function(){
        this.loadEvent();
        this.bindEvent();
    },
    loadEvent: function() {
        this.options.qd = this.getUrlParam('qd');
    },
    bindEvent: function(){
        var _this = this;

        $('body').click(function(){
            var theUrl = _this.getDownLoad();
            if(theUrl){
                window.location.href = theUrl;
                console.log(theUrl);
            }
            
        })
    },
    getDownLoad() {
        var _this = this;
        this.ajaxPost('/api/channel/hand/address',this.options,function(res){
            if(_this.isAndroid()){
                return res.data.android_address;
            }else{
                return res.data.ios_address;
            }
        },function(err){
            console.log(err);
        })
    },
    options:{
        qd: ''
    },
    ajaxPost: function(apiUrl,options,resolve,refect){
        $.post(apiUrl,options,function(res){
            if(res.code === 2000){
                console.log('success');
                console.log(res)
                resolve(res);
            }else{
                resolve(res);
            }
        },'json');
    },
    getUrlParam : function (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null
    },
    //判断是否是安卓
    isAndroid : function () {
        var u = navigator.userAgent;
        if(u.indexOf('Android') > -1 || u.indexOf('Adr') > -1){
            return true;
        }else{
            return false;
        }
    }

}

page.init();
