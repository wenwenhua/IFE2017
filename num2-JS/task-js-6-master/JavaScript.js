var test =document.getElementById('test');
var show =document.getElementById('ul');
var show_item =document.getElementById('ul').getElementsByTagName('li');
function leftIn(){
	if (!(getData())){
	    alert("is null");
	    return;
	}else 
		var data=getData();
	for (var i = 0; i < data.length; i++) {
		var element=document.createElement("li");
		element.innerHTML=data[i];
		show.insertBefore(element,show.childNodes[0]);
		delet(element);
	}
	
}

function rightIn(){
	if (!(getData())){
	    alert("is null");
	    return;
	}
	else 
		var data=getData();
	for (var i = 0; i < data.length; i++) {
		var element=document.createElement("li");
		element.innerHTML=data[i];
		show.appendChild(element);
		delet(element);
	}
}

function leftOut(){
	show.removeChild(show.childNodes[0]);
}

function rightOut(){
	show.removeChild(show.childNodes[show.childNodes.length-1]);
}

function getData(){
	var text=document.getElementsByTagName('textarea')[0].value.trim();
	var data;
/*	傻孩子
	if(text.indexOf(',')>-1)
		data=text.split(",");
	else if(text.indexOf('，')>-1)
		data=text.split('，');
	else if(text.indexOf(' ')>-1)
		data=text.split(' ');
	else if(text.indexOf('.')>-1)
		data=text.split('.');
	else if(text.indexOf('|')>-1)
		data=text.split('|');*/
	data = text.split(/[,，、;；\s]+/g);
	return data;
	
}
//删除事件
var delet = function(del){
	del.addEventListener('click',function(){
		show.removeChild(this);
	});
}

function query(){
	var key=document.getElementsByTagName('input')[0].value;
	for (var i = 0; i < show_item.length; i++) {
		if(show_item[i].innerHTML.indexOf(key)>-1){
			show_item[i].className="border";
			show_item[i].innerHTML=renderContent(show_item[i].innerHTML,key,show_item[i].innerHTML.indexOf(key));

		}
		else{
			//清理上一次的痕迹
			show_item[i].className="";
			show_item[i].innerHTML=show_item[i].innerText;
		}
	}
}
//高亮选中的语速
function renderContent(data,key,num) {
	var x=data.substring(0,num);
	var y=data.substr(num,key.length)
	var z=data.substr(num+key.length);
	// alert("x:"+x+" y:"+y+" z:"+z);

    var content = x+"<span>"+y+"</span>"+z;
    return content;
}