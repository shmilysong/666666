'use strict';
window.onload=function(){
	var oBox = document.querySelector('.box');
	var oHour = document.querySelector('.box .hour');
	var oMin = document.querySelector('.box .min');
	var oSec = document.querySelector('.box .sec');
	for(var i=0;i<60;i++){
		var oS = document.createElement('span');
		if(i%5==0){
				oS.className='big_scaler';
			if(i==0)
				oS.innerHTML='<em>'+12+'</em>';
			else
				oS.innerHTML='<em>'+i/5+'<\/em>';
			var oEm = oS.children[0];
			oEm.style.WebkitTransform='rotate('+-i*6+'deg)';
			oEm.style.MozTransform='rotate('+-i*6+'deg)';
			oEm.style.msTransform='rotate('+-i*6+'deg)';
		}else{
			oS.className='scaler';
		}
		
		oS.style.WebkitTransform='rotate('+i*6+'deg)';
		oS.style.MozTransform='rotate('+i*6+'deg)';
		oS.style.msTransform='rotate('+i*6+'deg)';
		oBox.appendChild(oS);
	}
	function tick(){
		var oDate = new Date();
		oHour.style.WebkitTransform='rotate('+(oDate.getHours()+oDate.getMinutes()/60)*30+'deg)';
		oMin.style.WebkitTransform='rotate('+(oDate.getMinutes()+oDate.getSeconds()/60)*6+'deg)';
		oSec.style.WebkitTransform='rotate('+oDate.getSeconds()*6+'deg)';
		
		oHour.style.MozTransform='rotate('+(oDate.getHours()+oDate.getMinutes()/60)*30+'deg)';
		oMin.style.MozTransform='rotate('+(oDate.getMinutes()+oDate.getSeconds()/60)*6+'deg)';
		oSec.style.MozTransform='rotate('+oDate.getSeconds()*6+'deg)';
		
		oHour.style.msTransform='rotate('+(oDate.getHours()+oDate.getMinutes()/60)*30+'deg)';
		oMin.style.msTransform='rotate('+(oDate.getMinutes()+oDate.getSeconds()/60)*6+'deg)';
		oSec.style.msTransform='rotate('+oDate.getSeconds()*6+'deg)';
	}
	tick();
	setInterval(tick,1000);
	
	var otxt = document.getElementsByName('startDate')[0];
	var oDiv = document.getElementById('div1');
	var oH2 = oDiv.getElementsByTagName('h2')[0];
	var oOl = oDiv.getElementsByTagName('ol')[0];
	var oUl = oDiv.getElementsByTagName('ul')[0];
	var aLi = oUl.children;
	var oNow = 0;
	var oleft = oDiv.getElementsByTagName('a')[0];
	var oright = oDiv.getElementsByTagName('a')[1];
	var oNow = 0;
	otxt.onfocus = function()
	{
		otxt.value ='';
		oDiv.style.display ='block';
		oDiv.style.left =this.offsetLeft +'px';
		oDiv.style.top =this.offsetHeight+this.offsetTop +'px';		
	}
	calendar();
	function calendar()
	{
		oUl.innerHTML ='';
		var oDate = new Date();
		oDate.setMonth(oDate.getMonth()+oNow,1);
		oH2.innerHTML =oDate.getFullYear()+'-'+(oDate.getMonth()+1);
		//获取第一天是周几
		var oDate = new Date(); //?
		oDate.setMonth(oDate.getMonth()+oNow,1);
		var w = oDate.getDay();//第一天是星期w
		if(w==0)w=7;	//如果是周日让0变成7
		w--;
		for(var i=0;i<w;i++)
		{
			var oLi = document.createElement('li');
			oUl.appendChild(oLi);
		}
		//获取本月有多少天
		var oDate = new Date();
		oDate.setMonth(oDate.getMonth()+1+oNow,0);
		var days = oDate.getDate();
		for(var i = 0; i < days; i++)
		{
			var oLi = document.createElement('li');
			oLi.innerHTML=i+1;
			oUl.appendChild(oLi);
		}
		//判断今天
		var oDate = new Date();
		var toDay = oDate.getDate();
		for(var i = 0; i < aLi.length; i++)
		{
			if(oNow == 0)
			{
				if(aLi[i].innerHTML == toDay)
				{
					aLi[i].className ='today';
					addEvn(aLi[i]);	
				}
				else if(aLi[i].innerHTML < toDay)
				{
					aLi[i].className ='past';
				}
				else
				{
					addEvn(aLi[i]);	
				}
			}
			else if(oNow < 0)
			{
				aLi[i].className ='past';
					
			}
			else
			{
				
			}
		}
	}
	//添加事件
	function addEvn(obj)
	{
		obj.onmouseover = function()
		{
			this.style.background ='#999';	
		}
		obj.onmouseout = function()
		{
			this.style.background ='';
		}
		obj.onclick = function()
		{
			var oDate = new Date();
			oDate.setMonth(oDate.getMonth()+oNow,1);
			otxt.value = oDate.getFullYear()+'-'+(oDate.getMonth()+1)+'-'+this.innerHTML;
			
		}
	}
	//点击向左
	oleft.onclick = function()
	{
		oNow--;
		calendar();
	}
	oright.onclick = function()
	{
		oNow++;
		calendar();
	}
};































