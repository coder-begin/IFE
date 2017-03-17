/* 数据格式演示
 var aqiSourceData = {
 "北京": {
 "2016-01-01": 10,
 "2016-01-02": 10,
 "2016-01-04": 10
 "2016-01-03": 10,
 }
 };
 */
//  参考以下示例代码，原始数据包含几个城市的空气质量指数数据
//  用户可以选择查看不同的时间粒度，以选择要查看的空气质量指数是以天为粒度还是以周或月为粒度
//      天：显示每天的空气质量指数
//      周：以自然周（周一到周日）为粒度，统计一周7天的平均数为这一周的空气质量数值，如果数据中缺少一个自然周的几天，则按剩余天进行计算
//      月：以自然月为粒度，统一一个月所有天的平均数为这一个月的空气质量数值
//  	用户可以通过select切换城市
//  	通过在"aqi-chart-wrap"里添加DOM，来模拟一个柱状图图表，横轴是时间，纵轴是空气质量指数，参考图（点击打开）。天、周、月的数据只根据用户的选择显示一种。
//      天：每天的数据是一个很细的矩形
//      周：每周的数据是一个矩形
//      月：每周的数据是一个很粗的矩形
//  	鼠标移动到柱状图的某个柱子时，用title属性提示这个柱子

// 以下两个函数用于随机模拟生成测试数据


function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date("2016-01-01");
    var datStr = '';
    for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }
    return returnData;
}

var aqiSourceData = {
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
};


// 记录当前页面的表单选项
var pageState = {
    nowSelectCity: -1,
    nowGraTime: "day"
}

/**
 * 渲染图表
 */
function dealRZY(datalen, ryzFlag) {
    var rdata = [];
    var temp = [];
    var data = dealData();
    (function () {
        for (var index = 0; index < datalen; index++) {
            temp[index] = [];
        }

    })();

    (function () {
        for (var index = 0; index < data.length; index++) {
            for (var i = 0; i < datalen; i++) {
                //数据结构:dataArr[城市(是一个数组，第一个是城市名，第二个具体信息)][日,周,月][具体日周月]
                temp[i].push(getAverage(data[index][1][ryzFlag][i]));
            }


        }
        for (var j = 0; j < datalen; j++) {
            rdata[j] = getAverage(temp[j]);
        }


    })();
    return rdata;

}

function dealCity() {
    var data = dealData();
    var cityInfo = [];

    var selectedCity = document.getElementById("city-select");
    var time = document.getElementsByName("gra-time");
    (function () {
        for (var i = 0; i < time.length; i++) {
            if (time[i].checked == true) {

                //return data[selectedCity.selectedIndex - 1][1][i];
                for(var j=0;j<data[selectedCity.selectedIndex - 1][1][i].length;j++){
                            cityInfo[j]=getAverage(data[selectedCity.selectedIndex - 1][1][i][j]);

                }



            }
        }


    })();

    return cityInfo;
}
function drawChart(rzyData, drawX, drawY, context, dataLen, num, str) {
    var needHeight=0;
    var hCoordinate = getMax(rzyData);
    var eveTemp = Math.round(hCoordinate / 10);
    (function () {
        var hNum = 0;
        var tempX = drawX;
        var tempY = drawY;
        var data = dealData();
        if(num<3){
             needHeight = dealRZY(data[0][1][num].length, num);

        }else{
            needHeight=dealCity();
        }
        context.fillText("空气指数", tempX - 75, tempY - 360);
        for (var j = 0; j < 10; j++) {
            context.fillText(hNum.toString(), tempX - 53, tempY - 20);
            hNum += eveTemp;
            tempY -= 30;
        }
        for (var i = 0; i < dataLen; i++) {
            context.fillText(i + 1 + str, drawX, drawY);
            context.fillRect(drawX + 6, drawY - 18, 10, -needHeight[i] * (30 / eveTemp));

            drawX += 35;

        }

    })();
}
function getMax(dataArr) {
    var max = 0;
    (function () {
        for (var index = 0; index < dataArr.length; index++) {
            max = Math.max(max, dataArr[index]);
        }

    })();
    return max;
}

function renderChart(dataNum) {

    var dataDiv = document.getElementById("aqi-chart-wrap");

    var data = dealData();
    if (dataDiv.getContext) {
        var context = dataDiv.getContext("2d");
        context.clearRect(0, 0, 1300, 450);
        context.strokeStyle = "black";
        context.fillStyle = "black";
        context.fillRect(50, 30, 2, 350);
        context.fillRect(50, 380, 1200, 2);
        context.font = "bold 12px Arial";
        var drawX = 80;
        var drawY = 400;
                if(dataNum<4){
                    var needData = dealRZY(data[0][1][dataNum - 1].length, dataNum - 1);

                }
        switch (dataNum) {
            case 1:

                drawChart(needData, drawX, drawY, context, needData.length, dataNum - 1, "号");
                break;
            case 2:
                drawChart(needData, drawX, drawY, context, needData.length, dataNum - 1, "周");

                break;
            case 3:
                drawChart(needData, drawX, drawY, context, needData.length, dataNum - 1, "月");
                break;
            case 4:
                var time = document.getElementsByName("gra-time");
                (function () {
                    for (var i = 0; i < time.length; i++) {
                        if (time[i].checked == true) {
                            switch (i) {
                                case 0:
                                    drawChart(dealCity(), drawX, drawY, context, dealCity().length, dataNum, "日");

                                    break;
                                case 1:
                                    drawChart(dealCity(), drawX, drawY, context, dealCity().length, dataNum, "周");
                                    break;
                                case 2:
                                    drawChart(dealCity(), drawX, drawY, context, dealCity().length, dataNum, "月");
                                    break;

                            }


                        }
                    }

                })();

                break;
        }

    }


}
//********************

function getData(i) {

    var cityArr = [];
    var dayArr = [];
    var weekArr = [];
    var monthArr = [];
    var Num;
    (function () {
        for (var index = 0; index < 31; index++) {
            dayArr[index] = [];

            if (index < 7) {
                weekArr[index] = [];
            }
            if (index < 12) {
                monthArr[index] = [];
            }


        }


    })();

    for (var index in aqiSourceData[i]) {
        var date=new Date(index);

        //存储天数据
        if (index.substr(8, 1) == "0") {
            Num = parseInt(index.substr(9, 1)) - 1;
            dayArr[Num].push(aqiSourceData[i][index]);
        } else {
            Num = parseInt(index.substr(8, 2)) - 1;
            dayArr[Num].push(aqiSourceData[i][index]);
        }

        //存储月数据
        if (index.substr(5, 1) == "0") {
            Num = parseInt(index.substr(6, 1)) - 1;
            monthArr[Num].push(aqiSourceData[i][index]);
        } else {
            Num = parseInt(index.substr(5, 2)) - 1;
            monthArr[Num].push(aqiSourceData[i][index]);
        }


        //存储周数据
        switch (date.toString().substr(0,3)){
            //FriSatSunMonTueWedThu
            case "Sun":
                weekArr[0].push(aqiSourceData[i][index]);
                break;
            case  "Mon":
                weekArr[1].push(aqiSourceData[i][index]);
                break;
            case  "Tue":
                weekArr[2].push(aqiSourceData[i][index]);
                break;
            case  "Wed":
                weekArr[3].push(aqiSourceData[i][index]);
                break;
            case  "Thu":
                weekArr[4].push(aqiSourceData[i][index]);
                break;
            case  "Fri":
                weekArr[5].push(aqiSourceData[i][index]);
                break;
            case  "Sat":
                weekArr[6].push(aqiSourceData[i][index]);
                break;
        }





    }
    cityArr.push(dayArr);
    cityArr.push(weekArr);
    cityArr.push(monthArr);
    return cityArr;

}
//***********
//求数据的平均数
function getAverage(allData) {
    var average = 0;
    for (var index = 0; index < allData.length; index++) {
        average = (average + allData[index]) / 2;
    }

    return average;
}


//*******
function dealData() {
    var dataArr = [];
    (function () {
        for (var i in aqiSourceData) {
            dataArr.push([i, getData(i)]);
        }
    })();

    return dataArr;
    //数据结构:dataArr[城市(是一个数组，第一个是城市名，第二个具体信息)][日,周,月][具体日周月]
}


function graTimeChange() {
    var time = document.getElementsByName("gra-time");
    (function () {
        for (var index = 0; index < time.length; index++) {
            if (time[index].checked) {
                switch (time[index].value) {
                    case "day":
                        renderChart(1);
                        break;
                    case "week":
                        renderChart(2);
                        break;
                    case "month":
                        renderChart(3);
                        break;

                }
            }
        }

    })();

// 确定是否选项发生了变化
// 设置对应数据
// 调用图表渲染函数
}

/**
 * select发生变化时的处理函数
 */

function citySelectChange() {
    var select = document.getElementById("city-select");

    select.onchange = renderChart(4);


}


function initGraTimeForm() {
    var time = document.getElementsByName("gra-time");
    (function () {
        for (var index = 0; index < time.length; index++) {
            time[index].addEventListener("click", graTimeChange, false);
        }

    })();
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
    var cityName = [];
    var citySelect = document.getElementById("city-select");
    citySelect.addEventListener("change", citySelectChange, false);
    (function () {
        for (var index in aqiSourceData) {
            cityName.push(index);
        }
    })();
    (function () {
        for (var index = 0; index < cityName.length; index++) {
            citySelect.add(new Option(cityName[index], cityName[index]), null);
        }
    })();
}


function init() {
    initGraTimeForm()
    initCitySelector();


}

init();
