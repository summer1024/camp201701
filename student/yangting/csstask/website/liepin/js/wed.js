$(document).ready(function(){
	window.onscroll = function() 
	{
		if(window.scrollY>400)
		{
			document.getElementById("backtop").style.visibility="visible";
		}
		else
		{
			document.getElementById("backtop").style.visibility="hidden";
		}
//		console.info(window.scrollY); 
	}
});
$(document).ready(function(){
	var obj1=document.getElementById("backtop").getElementsByTagName("img")[0];
	var obj2=document.getElementById("advice").getElementsByTagName("img")[0];
	$("#backtop").hover(
		function(){
			obj1.setAttribute("src","img/moveup2.png");
			//alert("lllll");
		},
		function(){
			obj1.setAttribute("src","img/moveup.png");
		}
	);
	$("#backtop").click(function(){
		$("html").animate({"scrollTop": "0px"},300); //IE,FF
        $("body").animate({"scrollTop": "0px"},300); //Webkit
	});
	$("#advice").hover(
		function(){
			obj2.setAttribute("src","img/zixun2.png");
		},
		function(){
			obj2.setAttribute("src","img/zixun1.png");
		}
	);
	$(".xiala-wrap").eq(0).click(function(){
		var doc=document.getElementById("xiala-city");
		if(doc.style.visibility=="hidden")
		{
			doc.style.visibility="visible";
		}
		else 
		{
			doc.style.visibility="hidden";
		}
	});
	$(".xiala-wrap").eq(1).click(function(){
		var doc=document.getElementById("xiala-bumen");
		if(doc.style.visibility=="hidden")
		{
			doc.style.visibility="visible";
		}
		else 
		{
			doc.style.visibility="hidden";
		}
	});
	$("#xiala-city").click(function(){
		var doc=document.getElementById("xiala-city");
		var doc_li=doc.getElementsByTagName("li");
		for(i=0;i<doc_li.length;i++)
		{
			
			doc_li[i].onclick=function(){
				var str=this.innerHTML;
				document.getElementsByClassName("sdiv")[0].getElementsByTagName("p")[0].innerHTML=str;
				$(".first").eq(0).removeClass("first");
				this.className="city first";
				doc.style.visibility="hidden";
			}
		}		
	});
	$("#xiala-bumen").click(function(){
		var doc=document.getElementById("xiala-bumen");
		var doc_li=doc.getElementsByTagName("li");
		for(i=0;i<doc_li.length;i++)
		{
			
			doc_li[i].onclick=function(){
				var str=this.innerHTML;
				document.getElementsByClassName("sdiv")[1].getElementsByTagName("p")[0].innerHTML=str;
				$(".first").eq(1).removeClass("first");
				this.className="city first";
				doc.style.visibility="hidden";	
			}
		}		
	});
})
