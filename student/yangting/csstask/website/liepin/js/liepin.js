$(document).ready(function(){
	$(".head-wrap span").hover(
		function(){
			document.getElementsByClassName("hide-home")[0].className="show-home";
		},
		function(){
			document.getElementsByClassName("show-home")[0].className="hide-home";
		}
	)
})
