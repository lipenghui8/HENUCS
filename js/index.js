$(function(){
	// $('.block').paroller();
	//------初进效果------
	if($(window).scrollTop()<=$(window).height()/3){
		var i=4;
		var intervalExit=false;
		initInterval=setInterval(function(){
			intervalExit=true;
			i--;
			if(i>0){
				$('.count-num').html(i);
			}else if(i==0){
				var toAim=$('#welcome');
				height=$(window).height();
				if($(window).scrollTop()<height/2){
					$('html,body').animate({scrollTop:toAim.offset().top-$('#header').height()}, 100);
				}
				if(intervalExit==true){
					clearInterval(initInterval);
					intervalExit=false;
				}
				$('.count-num').html('&nbsp;');
			}else{
				if(intervalExit==true){
					clearInterval(initInterval);
					intervalExit=false;
				}
				return;
			}
		},1000);
	}
	$(window).scroll(function(){
		if(intervalExit==true){
			if($(window).scrollTop()>$(window).height()/2){
				clearInterval(initInterval);
			}
		}
		$('.count-num').html('&nbsp;');	
	});
	//------初进效果------


	//背景动图控制
	$('.cover').each(function(){
		$(this).load(function(){
			$('.CS').css({
				'background':'url(img/cover.gif)  center center no-repeat',
				'background-size':'cover'
			});
			var i=4;
			gifInterval=setInterval(function(){
				i--;
				if(i==0)
				{
					clearInterval(gifInterval);
					$('.CS').css({
						'background':'url(img/cover-after.png)  center center no-repeat',
						'background-size':'cover'
					});
				}
			},1000);

		});
	});


	//全景iframe
	$('.site-footer').css('position','relative');
	function changePanoramicHeight(){
		var winHeight=$(window).height();
		var headerHeight=$('#header').height();
		$('#panoramic').css({
			'height':winHeight-headerHeight
		});
	}
	changePanoramicHeight();
	$(window).resize(function(){
		changePanoramicHeight();
	});
	var iframeShow=false;
	$('.lead-to-panoramic-up , .lead-to-panoramic-down, .lead-to-panoramc').click(function(){
		if(!iframeShow)
		{
			$('#panoramic').append('<iframe src="https://720yun.com/t/067jrzevvO3" frameborder="no"></iframe>');
			$('#panoramic').css({'display':'block'});
			$('html,body').animate({scrollTop:$('#panoramic').offset().top},1000)
			iframeShow=true;
			$('.lead-to-panoramic-up-p , .lead-to-panoramic-down-p, .lead-to-panoramic-p').html('点击关闭全景图');
		}
		else
		{
			$('#panoramic').empty();
			$('#panoramic').css({'display':'none'});
			iframeShow=false;
			$('.lead-to-panoramic-up-p , .lead-to-panoramic-down-p, .lead-to-panoramic-p').html('点击查看全景图');
		}
	});



	//------鼠标点击特效------
	var a_idx = 0;
	var color_arr_index=0;
	$("body").click(function(e) {
        var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善","计算机与信息工程学院欢迎您","欢迎来到代码的世界","+1","+1","107网站工作室");
        var color_arr=new Array("#f30","#cc3333","#cccc33","#ff6651","#FF9966","#99CC66","#FF0033","#336699","#990033","#CCFFFF");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
        	"user-select":"none",
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "600",
            "font-size": "20px",
            "font-family": "微软雅黑",
            "color": color_arr[color_arr_index]
        });
        color_arr_index=(color_arr_index+1)%color_arr.length;
        $("body").append($i);
        $i.animate({
            "top": y - 220,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
	//------鼠标点击特效------
});