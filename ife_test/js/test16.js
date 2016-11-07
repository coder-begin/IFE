var aqiData = [];

function addAqiData() {
	//判断输入格式是否正确
	//使用数组来存储数据
	var tempCity = "";
	var tempNum = "";
	var cityData = document.getElementById("aqi-city-input").value.trim();
	var airData = document.getElementById("aqi-value-input").value.trim();
	var cityLength = cityData.length;
	var airLength = airData.length;
	var regCity = /[\u4e00-\u9fa5 a-z A-Z]/gi;
	var regAir = /[0-9]/g;
	if(cityData.match(regCity).length == cityLength) {
		for(var i in cityData) {
			tempCity += cityData[i];
		}
	} else {
		alert("输入有误");
	}
	if(airData.match(regAir).length == airLength) {
		for(var j in airData) {
			tempNum += airData[j];
		}
	} else {
		alert("输入有误")
	}
	//将数据加入到数组
	aqiData.push([tempCity, tempNum]);
	//绑定“删除”按钮
	bondBtn();
	//显示空气质量列表
	showList();

}

//绑定删除按钮函数
function bondBtn() {
	(function(){
		for(var k in aqiData) {
		var id = "btn" + k;
		document.getElementById(id).onclick = delBtnHandle;

	}
	})();
}

//显示列表的函数
function showList() {
	var showList = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	var showTable = document.getElementById("aqi-table");
	(function() {
		for(var k in aqiData) {
			var id = "btn" + k;
			showList += "<tr><td>" + aqiData[k][0] + "</td><td>" + aqiData[k][1] + "</td><td><button id=" + id + ">删除</button></td></tr>";

		}

	})();
	showTable.innerHTML = showList;
}

//渲染表格
function renderAqiList() {
	var showTable = document.getElementById("aqi-table");
	showTable.style.textAlign = "center";
	showTable.style.backgroundColor = "black";
	showTable.style.color = "white";
	showTable.style.textAlign = "center";
}

//添加按钮
function addBtnHandle() {
	addAqiData();
	renderAqiList();
}

//删除数据
function delBtnHandle() {
	//根据id来删除数组数据
	var rowsInfo = document.body.querySelector("#aqi-table tbody");
	var focusNode = document.activeElement.id.substr(3);
	var pos = parseInt(focusNode);
	aqiData.splice(pos, 1);
	
	//重新显示列表
	showList();
	
	//重新绑定按钮事件，主要是按钮事件是根据数据的多少来绑定的
	//数据被删除了长度就变了，所以重新设定
	bondBtn();
	
	renderAqiList();
}

function init() {

	window.onload = function() {
		document.getElementById("add-btn").onclick = addBtnHandle;

	}

}

init();