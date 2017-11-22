$(function(){
    //解决高度
	function winheig(){
        var h=$(window).height();
        var h2=$(".top").height();
        var h4=h-h2+"px";
        var h5=h2+"px";
        $(".index").css({"height":h4,"margin-top":h5});
    };
    winheig();
    
	$(window).resize(function () { 
	    winheig();
	});
	var mySwiper = new Swiper('.index', {
		autoplay : 5000,
	})
})