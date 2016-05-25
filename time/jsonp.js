'use strict';
/*
**	@jsonp		跨域交互
**	@params
**			json		[object]
**				url		[string]
**				cbName	[string]
**				data	[object]
**				success	[function]
*/
function jsonp(json){
	//判断都有没有东西，做处理
	json = json||{};
	//如果没有url就阻止
	if(!json.url)return;
	//callback的名字
	json.cbName = json.cbName||'cb';
	//数据
	json.data = json.data||{};
	
	//回调函数的名字，要随机。为了解决缓存
	json.data[json.cbName] = 'show'+Math.random();
	//把函数名中的.去掉
	json.data[json.cbName] = json.data[json.cbName].replace('.','');
	
	var arr = [];
	for(var i in json.data){
		arr.push(i+'='+encodeURIComponent(json.data[i]));
	}
	
	//回调函数
	window[json.data[json.cbName]] = function (result){
		//执行用户要执行的函数
		json.success&&json.success(result);
		//删除script
		oH.removeChild(oS);
		//把没用的函数干掉
		window[json.data[json.cbName]]=null;
	}
	var str = arr.join('&');
	//开始创建script
	var oS = document.createElement('script');
	oS.src=json.url+'?'+str;
	var oH = document.getElementsByTagName('head')[0];
	oH.appendChild(oS);
}
