$(document).ready(function(){
//for the button click to show/hide content
	$('#whyVjtw_ans1').hide();
	$('#whyVjtw_ans2').hide();
	$('#whyLogo_ans1').hide();
	$('#whyLogo_ans2').hide();
	var whyVjtw_ans1 = document.getElementById('whyVjtw_ans1');
	var whyVjtw_ans2 = document.getElementById('whyVjtw_ans2');
	var whyLogo_ans1 = document.getElementById('whyLogo_ans1');
	var whyLogo_ans2 = document.getElementById('whyLogo_ans2');
	$('#whyVjtw_q1_bt').click(function(){
		$('#whyVjtw_ans1').slideToggle(500);
		if(whyVjtw_ans2.style.display=="block") {
			$('#whyVjtw_ans2').slideUp(500);
		}
	});
	$('#whyVjtw_q2_bt').click(function(){
		$('#whyVjtw_ans2').slideToggle(500);
		if(whyVjtw_ans1.style.display=="block") {
			$('#whyVjtw_ans1').slideUp(500);
		}
	});
	$('#whyLogo_q1_bt').click(function(){
		$('#whyLogo_ans1').slideToggle(500);
		if(whyLogo_ans2.style.display=="block") {
			$('#whyLogo_ans2').slideUp(500);
		}
	});
	$('#whyLogo_q2_bt').click(function(){
		$('#whyLogo_ans2').slideToggle(500);
		if(whyLogo_ans1.style.display=="block") {
			$('#whyLogo_ans1').slideUp(500);
		}
	});
	
	//if the window is at the certain place, the left index may show
	var vjtw = $('#VjtwTitle').offset().top;
	var logo = $('#LogoTitle').offset().top;
	var goal = $('#goalTitle').offset().top;
	var member = $('#memberTitle').offset().top;
	var origin = $('#Vjtwicon').offset().top;
	$(function(){
		$('#contain').scroll(function() {
			var winScroll = $(this).scrollTop();
			if(winScroll <= logo) {
				$('#icon_now_wrapper').css({top:($('#Vjtwicon').offset().top-origin)});
			} else if(winScroll > logo && winScroll <= goal) {
				$('#icon_now_wrapper').css({top:($('#Logoicon').offset().top-origin)});
			} else if(winScroll > goal && winScroll <= member) {
				$('#icon_now_wrapper').css({top:($('#Goalicon').offset().top-origin)});
			} else if(winScroll > member) {
				$('#icon_now_wrapper').css({top:($('#Membericon').offset().top-origin)});
			}
		});
	});

	//click the index, goto the section it contain
	$('#Vjtwicon').click(function(){
		$('#contain').animate({scrollTop:vjtw+1},1000);
	});
	$('#Logoicon').click(function(){
		$('#contain').animate({scrollTop:logo+1},1000);
	});
	$('#Goalicon').click(function(){
		$('#contain').animate({scrollTop:goal+1},1000);
	});
	$('#Membericon').click(function(){
		$('#contain').animate({scrollTop:member+1},1000);
	});
});
