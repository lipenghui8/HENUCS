$(function(){


	/*判断rd-content下的元素最大宽度max*/
	var divContent = $(".rd-content");
	var max=0;
	divContent.children().each(function(i,n){
		var objwidth = $(n).width();
		if(objwidth>max)
		{
			max=objwidth;
		}
    });

	changeWayToScan();
	$(window).resize(function(){
		changeWayToScan();
	});

	function changeWayToScan(){ //在宽度超出时改变
		var window_width = $(window).width();
		var left=divContent.offset().left;//divcontent到浏览器左边的距离
		var right=window_width-left;
		if(max>=right)
		{
			$(".rd-content").css({
				'overflow':'scroll'
			});
		}else{
			$(".rd-content").css({
				'overflow':'visible'
			});
		}
	};
});