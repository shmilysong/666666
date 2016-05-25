// JavaScript Document
window.onload = function()
   {	
	var n = 0; //计数1
	var m = 1; //计算2
	var p = 1; //计数3

	
	var btn_close = document.getElementById('btn_close');
	var top_banner = document.getElementById('top_banner');
	btn_close.onclick = function()
	{
		top_banner.style.display = 'none';
	}
	
	var left_nav = document.getElementById('left_nav');
	var left_navlis = left_nav.getElementsByTagName('li');
	var show_nav_left2 = document.getElementById('show_nav_left2');
	var show_nav_leftlis = show_nav_left2.getElementsByTagName('li');
	var show_nav_left = document.getElementById('show_nav_left');
	for(var i = 0; i < left_navlis.length; i++)
	{
		left_navlis[i].index = i;
		left_navlis[i].onmouseover = function()
		{
			show_nav_left.style.display='block';
			for(var j =0; j < left_navlis.length; j++)
			{
				show_nav_leftlis[j].style.display = 'none';	
			}
			show_nav_leftlis[this.index].style.display = 'block';	
		}
		left_navlis[i].onmouseout = function()
		{
			show_nav_left.style.display='none';
			for(var j =0; j < left_navlis.length; j++)
			{
				show_nav_leftlis[j].style.display = 'none';
			}
		}		
	}
	
	
	var center_nav = document.getElementById('center_nav');
	var as = center_nav.getElementsByTagName('a');
	var btn_num = document.getElementById('btn_num');
	var spans = btn_num.getElementsByTagName('span');
	for(var i = 0; i < spans.length; i++)
	{
		spans[i].index = i;
		spans[i].onmouseover = function()
		{
			for( var j = 0; j < spans.length; j++)
			{
				as[j].style.display = 'none';
				spans[j].style.background = '#3e3e3e';
			}
			this.style.background = '#b61b1f';
			as[this.index].style.display = 'block';
		}	
	}
	
	var show_btnL = document.getElementById('show_btnL');
	var show_btnR = document.getElementById('show_btnR');
	show_btnL.onclick = function()
	{
		n++;
		if( n == 6)
		{
			n = 0;	
		}
		for( var j = 0; j < spans.length; j++)
		{
			as[j].style.display = 'none';
			spans[j].style.background = '#3e3e3e';
		}
		as[n].style.display = 'block';
		spans[n].style.background = '#b61b1f';
	}
	show_btnR.onclick = function()
	{
		n++;
		if( n == 6)
		{
			n = 0;	
		}
		for( var j = 0; j < spans.length; j++)
		{
			as[j].style.display = 'none';
			spans[j].style.background = '#3e3e3e';
		}
		as[n].style.display = 'block';
		spans[n].style.background = '#b61b1f';
	}
	
	//+0 时钟函数
	function toDou(n)
	{
		if(n < 10)
		{
			return '0'+n;	
		}	
		else
		{
			return ''+n;	
		}
	}
	
	var clock = document.getElementById('clock');
	var clock_imgs = clock.getElementsByTagName('img');
	function tick()
	{
		var oDate = new Date();
		var str = toDou(oDate.getHours()) + toDou(oDate.getMinutes()) +toDou(oDate.getSeconds());
		for(var i = 0; i < clock_imgs.length; i++)
		{ 
			clock_imgs[i].src ='img/'+str[i]+'.png'; 	
		}	
	}
	setInterval(tick,1000);
	tick();
	
	//今日推荐
	var tuijian = document.getElementById('tuijian');
	var tuijian1 = tuijian.getElementsByClassName('tuijian1');
	var show_tuijianL = document.getElementById('show_tuijianL');
	var show_tuijianR = document.getElementById('show_tuijianR');
	show_tuijianL.onclick = function()
	{
		m++;
		for( var i = 0; i < tuijian1.length; i++)
		{
			tuijian1[i].style.display = 'none';
		}
		tuijian1[m-1].style.display = 'block';
		if(m == 3)
		{
			m = 0;	
		}
	}  
	show_tuijianR.onclick = function()
	{
		m++;
		for( var i = 0; i < tuijian1.length; i++)
		{
			tuijian1[i].style.display = 'none';
		}
		tuijian1[m-1].style.display = 'block';
		if(m == 3)
		{
			m = 0;	
		}
	} 
	
	//猜你喜欢
	var like = document.getElementById('like');
	var uls = like.getElementsByTagName('ul');
	var change = document.getElementById('change');
	change.onclick = function()
	{
		p++;
		for( var i = 0; i < uls.length; i++)
		{
			uls[i].style.display = 'none';
		}
		uls[p-1].style.display = 'block';
		if(p == 3)
		{
			p = 0;	
		}
	}
	
	var a = 1;
	var png = document.getElementById('png');
	function changepng()
	{
		if(a == 1)
		{
			png.src ="img/g1.png";	
		}
		if(a == 2)
		{
			png.src ="img/g2.png";	
		}
		if(a == 3)
		{
			png.src ="img/g3.png";	
		}
		a++;
		if(a > 3)
		{
			a =1;	
		}			
	}
	setInterval(changepng,1000);
	
}
