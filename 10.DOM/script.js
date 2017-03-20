window.onload=function(){
	function $(id){
		return document.getElementById(id);
	}
/*
		//
	var father=document.getElementById("father");
	var son=document.getElementById("son");
	console.log(father.nodeType==1);
	console.log(father.nodeName);
	console.log($("father").childNodes.length);
	console.log($("father").lastChild);
	var returnedNode = father.appendChild(father.firstChild);
	console.log(returnedNode);
	console.log(returnedNode==father.firstChild);
	console.log(returnedNode==father.lastChild);

	var father=$("father");
	var newNode=$("another");
	//var returnedNode=father.insertBefore(newNode,null);
	//var returnedNode=father.insertBefore(newNode,father.childNodes[father.childNodes.length-2]);
	//var returnedNode=father.replaceChild(newNode,father.lastChild);
	var returnedNode=father.removeChild(father.lastChild);
	console.log(returnedNode);

	var deepList=$("father").cloneNode(true);
	console.log(deepList.childNodes.length);
	var shallowList=$("father").cloneNode();
	console.log(shallowList.childNodes.length);
	console.log(deepList);
	var originalTitle=document.title;
	console.log(document.title);
	document.title="LeeSeDol";
	console.log(document.title);
	console.log(document.URL);
	console.log(document.domain);

	var passage=document.getElementsByTagName("p");
	var boy=passage.namedItem("boy");
	var son=passage["son"];
	console.log(son);
	console.log(boy);
*/
/*
	var title=document.title;
	document.title="New page title";
	console.log(title);
	url=document.URL;
	console.log(url);
*/
/*	var son=document.getElementsByName("son");
	console.log(son[0]);
	var radios=document.getElementsByName("color");
	console.log(radios.length);
	var div=document.getElementById("father");
	console.log(div.tagName);
	console.log(div.tagName==div.nodeName);
	if(div.tagName.toLowerCase()=="div"){
		console.log("tagName==div");
	}
	console.log(div.id);
	console.log(div.className);
	console.log(div.title);
	console.log(div.lang);
	console.log(div.dir);
	div.id="someOtherId";
	div.className="ft";
	div.title="Some other text";
	div.lang="fr";
	div.dir="rtl";
	console.log(div.id);
	console.log(div.className);
	console.log(div.title);
	console.log(div.lang);
	console.log(div.dir);

	var div=document.getElementById("myDiv");
	console.log(div.id);
	console.log(div.my_special_attribute);
	console.log(div.align);
	console.log(div.getAttribute("my_special_attribute"));
	div.attributes.getNamedItem("id").nodeValue="ssssss";
	//div.removeAttribute("id");
	var id=div.attributes.getNamedItem("id").nodeValue;
	console.log(id);
	div.attributes["id"].nodeValue="sss";
	console.log(div.id);
*/
	//遍历元素Attribute
/*	var div=document.getElementById("myDiv");
	var attrs=outputAttributes(div);
	console.log(attrs);
	function outputAttributes(element){
		var pairs=[];
		var attrName,
			attrValue,
			i,
			len;
		for(var i=0,len=element.attributes.length; i<len ;i++){
			attrName=element.attributes[i].nodeName;
			attrValue=element.attributes[i].nodeValue;
			pairs.push(attrName + "=\""+attrValue+"\"");
		}
		return pairs.join(' , ');
	}
	function outputAttributes(element){
		var pairs=[];
		var attrName,
		attrValue,
		i,
		len;
		for(var i=0,len=element.attributes.length;i<len;i++){
			attrName=element.attributes[i].nodeName;
			attrValue=element.attributes[i].nodeValue;
			pairs.push(attrName+"=\""+attrValue+"\"");
		}
		return pairs.join("  ");
	}
*/

//动态脚本
/*	function loadScript(url){
		var script=document.createElement("script");
		script.type="text/javascript";
		script.src=url;
		//var body=document.getElementsByTagName("body")[0];
		document.body.appendChild(script);
	}
	loadScript("test1.js");
	function loadScriptString(code){
		var script=document.createElement("script");
		script.type="text/javascript";
		try{
			script.appendChild(document.createTextNode(code));
		}catch(ex){
			script.text=code;
		}
		document.body.appendChild(script);
	}
	loadScriptString("alert('sss');");
*/
/*
		//动态样式
	function loadStyle(url){
		var link=document.createElement("link");
		link.rel="stylesheet";
		link.type="text/css";
		link.href=url;
		var head=document.getElementsByTagName("head")[0];
		head.appendChild(link);
	}
	loadStyle("style.css");

	function loadStyleString(css){
		var style = document.createElement("style");
		style.type="text/css";
		try{
			style.appendChild(document.createTextNode(css));
		}catch(ex){
			style.styleSheet.cssText=css;
		};
		var head=document.getElementsByTagName("head")[0];
		head.appendChild(style);
	}//动态样式结束
	loadStyleString("body{background-color:#fad}");
*/
//操作表格
	//创建table
	var table=document.createElement("table");
	table.border="1";
	table.width="100%";
	//创建tbody
	var tbody=document.createElement("tbody");
	table.appendChild(tbody);
	//创建第一行

	var row1=document.createElement("tr");
	tbody.appendChild(row1);
	var cell1_1=document.createElement("td");
	cell1_1.appendChild(document.createTextNode("Cell 1,1"));
	row1.appendChild(cell1_1);
	var cell2_1=document.createElement("td");
	cell2_1.appendChild(document.createTextNode("Cell 2,1"));
	row1.appendChild(cell2_1);
	//创建第二行

	var row2=document.createElement("tr");
	tbody.appendChild(row2);
	var cell1_2=document.createElement("td");
	cell1_2.appendChild(document.createTextNode("Cell 1,2"));
	row2.appendChild(cell1_2);
	var cell2_2=document.createElement("td");
	cell2_2.appendChild(document.createTextNode("Cell 2,2"));
	row2.appendChild(cell2_2);
	document.body.appendChild(table);

	//创建table
	var table=document.createElement("table");
	table.border="1";
	table.width="100%";
	//创建tbody
	var tbody=document.createElement("tbody");	
	table.appendChild(tbody);
	//创建第一行
	tbody.insertRow(0);
	tbody.rows[0].insertCell(0);
	tbody.rows[0].cells[0].appendChild(document.createTextNode("Cell 1,1"));
	tbody.rows[0].insertCell(1);
	tbody.rows[0].cells[1].appendChild(document.createTextNode("Cell 2,1"));
	//创建第二行
	tbody.insertRow(1);
	tbody.rows[1].insertCell(0);
	tbody.rows[1].cells[0].appendChild(document.createTextNode("Cell 2,1"));
	tbody.rows[1].insertCell(1);
	tbody.rows[1].cells[1].appendChild(document.createTextNode("Cell 2,2"));
	document.body.appendChild(table);


};