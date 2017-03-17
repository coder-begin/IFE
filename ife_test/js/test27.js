var shipsNum = 0;                                         //飞船标号，大于4就不能创建
var universe = document.getElementById("universe");     //获取宇宙地图
var control = document.getElementById("control");       //获取创建飞船面板
var initLoc = initAddr();                               //初始化飞船路径
var shipNum = ["0", "0", "0", "0"];                        //飞船标号保存
var dynamicalSys = document.querySelectorAll("#dynamicalSys input[type=radio]");//获取动力系统
var energySys = document.querySelectorAll("#energySys input[type=radio]");     //获取能源系统
var shipList = document.getElementById("shipsList");      //获取飞船控制面板
//初始化飞船地址
function initAddr() {
    var address = [];
    var x = 0;
    var y = 0;
    (function () {
        for (var i = 0; i < 40; i++) {

            address[i] = [];

        }
        for (var j = 0; j < 40; j++) {

            address[j].push(150 + 145 * Math.sin(x));
            address[j].push(200 - 145 * Math.cos(y));
            x += Math.PI / 20;
            y += Math.PI / 20;

        }


    })();

    return address;
}

//初始化行星
function initPlant() {
    var arc = document.getElementById("arc");

    if (arc.getContext) {
        var context = arc.getContext("2d");
        context.beginPath();
        context.fillStyle = "blue";
        context.arc(70, 70, 70, 0, 2 * Math.PI, false);
        context.fill();


    }


}

//初始化创建飞船的按钮事件
function initEvent() {

    var createShip = document.getElementById("newShipFly");
    createShip.onclick = function () {
        if (shipsNum < 4) {
            createNewShip();

        }

    }


}

//计算信息能够到达的概率
function calcPro() {
    var num = Math.round(Math.random() * 10);
    if (num > 3) {
        return true;
    } else {
        return false;
    }


}

//定义飞船对象
function Ship(ship_Num,shipInfo) {
    var t = this;
    this.dyAndEn=shipInfo[5];
    this.reEn = shipInfo[4];
    this.x_index = 0;
    this.y_index = 0;
    this.nameNum = ship_Num;
    this.x = shipInfo[0];
    this.y = shipInfo[1];
    this.timeOut = null;
    this.energy = 100;
    this.flySpeed = shipInfo[2];
    this.isFlying = false;
    this.isDestory = false;
    this.enCon = shipInfo[3];
    Ship.prototype.getDyAndEn=function(){
        return this.dyAndEn;

    }
    Ship.prototype.getNameNum = function () {
        return this.nameNum;

    }
    Ship.prototype.getEnergy = function () {
        return this.energy;
    }

    Ship.prototype.setEnergy = function (ener) {
        this.energy = ener;

    }
    Ship.prototype.getX = function () {
        return this.x;
    }
    Ship.prototype.setX = function (X) {
        this.x = X;
    }
    Ship.prototype.getY = function () {
        return this.y;

    }
    Ship.prototype.setY = function (Y) {
        this.y = Y;
    }
    this.stopFly = function () {
        this.isFlying = false;
        changeFlyAndEn(t);
    };
    this.desShip = function () {
        shipNum[this.nameNum - 1] = 0;
        shipsNum--;
        universe.removeChild(document.getElementById(this.nameNum));
        shipList.removeChild(document.getElementById("control" + this.nameNum));
        this.isDestory = true;
        changeFlyAndEn(t);

    }
    this.beginFly = function () {
        t.isFlying = true;
        clearTimeout(t.timeOut);
        setTimeout(function () {
            if (!t.isDestory) {
                if (t.energy > 0 && t.isFlying) {
                    t.x = Math.round(initLoc[t.x_index++][0]);
                    t.y = Math.round(initLoc[t.y_index++][1]);
                    t.energy -= Math.round(t.energy * t.enCon) + 2;
                    t.energy += Math.round(t.energy * t.reEn);
                    changeFlyAndEn(t);
                    repaint(t);
                    if (t.x_index > 39) {
                        t.x_index = 0;
                        t.y_index = 0;
                    }
                    t.timeOut = setTimeout(arguments.callee, t.flySpeed);


                } else {
                    t.isFlying = false;
                    if (t.energy < 100) {
                        t.energy += Math.round(t.energy * t.reEn) + 1;

                            changeFlyAndEn(t);


                        t.timeOut = setTimeout(arguments.callee, t.flySpeed);

                    }

                    repaint(t);

                }

            }


        }, t.flySpeed);


    };


    this.control = function (controlId, address) {
        switch (controlId) {
            case 1:
                if (calcPro()) {
                    setTimeout(function () {
                        t.beginFly(address);
                    }, 1000);
                }

                break;

            case 2:
                if (calcPro()) {
                    setTimeout(function () {
                        t.stopFly();
                    }, 1000);

                }
                break;
            case  3:
                if (calcPro()) {
                    setTimeout(function () {
                        t.desShip();
                    }, 1000);

                }
                break;


        }


    }


}

function  changeFlyAndEn(ship){
    var tableBody=document.getElementById("bodyShipInfo");
    var tableBodyChild=tableBody.children;

    (function(){


           for(var i=0;i<tableBodyChild.length;i++){
               if(tableBodyChild[i].cells[0].textContent.substr(0,1)==ship.nameNum.toString()){
                  if(ship.isDestory){
                      tableBody.deleteRow(i);
                  }else{
                      if(ship.isFlying){
                          tableBodyChild[i].cells[3].textContent="飞行中";
                          tableBodyChild[i].cells[4].textContent=ship.energy+"%";
                      }else{
                          tableBodyChild[i].cells[3].textContent="停止";
                          tableBodyChild[i].cells[4].textContent=ship.energy+"%";
                      }
                  }


               }
           }



    })();

}
function  addShipInfo(ship){
    var doc=document;
    var tableBody=doc.getElementById("bodyShipInfo");
    var childLen=tableBody.children.length;
    tableBody.insertRow(childLen);
    tableBody.rows[childLen].insertCell(0).textContent=ship.getNameNum()+"号";
    tableBody.rows[childLen].insertCell(1).textContent=ship.getDyAndEn()[0];
    tableBody.rows[childLen].insertCell(2).textContent=ship.getDyAndEn()[1];
    tableBody.rows[childLen].insertCell(3).textContent="停止";
    tableBody.rows[childLen].insertCell(4).textContent="100%";


}


//冻结对象
Object.freeze(Ship);
//重绘飞船位置和能量等信息
function repaint(myShip) {
    var doc = document;

    if (doc.getElementById(myShip.getNameNum().toString())) {
        var ship = doc.getElementById(myShip.getNameNum().toString());
        ship.style.left = myShip.getX() + "px";
        ship.style.top = myShip.getY() + "px";
        drawShip(ship, myShip);

    } else {
        var ship = document.createElement("canvas");
        var style = ship.style;
        ship.id = myShip.getNameNum();
        ship.width = 70;
        ship.height = 40;
        style.position = "absolute";
        style.left = myShip.getX() + "px";
        style.top = myShip.getY() + "px";
        drawShip(ship, myShip);
        universe.appendChild(ship);
    }


}

//画飞船
function drawShip(createdShip, thisShip) {
    var imgElem = document.createElement("img");
    imgElem.src = "../img/spaceShip.png";
    var context = createdShip.getContext("2d");
    context.clearRect(0, 0, 70, 40);
    context.font = "bold 5px '楷体'";
    context.drawImage(imgElem, 0, 0);
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "black";
    context.fillText(thisShip.getNameNum().toString(), 20, 20);
    context.fillText(" 号-", 30, 20);
    context.fillText(thisShip.getEnergy().toString(), 50, 20);
    context.fillText("%", 63, 20);
}

//创建控制飞船的控制台
function showShipControl(ship) {
    var doc = document;
    var instruct = doc.createElement("div");
    var beginFly = doc.createElement("button");
    var stopFly = doc.createElement("button");
    var destroyShip = doc.createElement("button");
    var text = doc.createElement("span");
    var shipList = doc.getElementById("shipsList");      //获取飞船控制面板


    instruct.id = "control" + ship.getNameNum();
    text.textContent = "对第" + ship.getNameNum() + "号飞船下达指令：";
    beginFly.textContent = "开始飞行";
    stopFly.textContent = "停止飞行";
    destroyShip.textContent = "销毁";

    beginFly.onclick = function () {
        ship.control(1);

    };
    stopFly.onclick = function () {
        ship.control(2);
    };
    destroyShip.onclick = function () {
        ship.control(3);
    };

    instruct.appendChild(text);
    instruct.appendChild(beginFly);
    instruct.appendChild(stopFly);
    instruct.appendChild(destroyShip);
    shipList.appendChild(instruct);
}

//创建飞船对象
function getShipType() {
    var shipType = [150, 55];
    var shipDyandEn=[];
    var docDy = dynamicalSys;
    var docEn = energySys;
    (function () {
        for (var i = 0; i < docDy.length; i++) {
            if (docDy[i].checked == true) {
                switch (i) {
                    case  0:
                        shipType.push(333);
                        shipType.push(0.05);
                        shipDyandEn.push("前进号");
                        break;
                    case 1:
                        shipType.push(200);
                        shipType.push(0.07);
                        shipDyandEn.push("奔腾号");
                        break;
                    case 2:
                        shipType.push(125);
                        shipType.push(0.09);
                        shipDyandEn.push("超越号");
                        break;
                }

            }
        }
        for (var j = 0; j < docEn.length; j++) {


            if (docDy[j].checked == true) {
                switch (j) {
                    case  0:
                        shipType.push(0.02);
                        shipDyandEn.push("劲量型");
                        break;
                    case 1:
                        shipDyandEn.push("光能型");
                        shipType.push(0.03);
                        break;
                    case 2:
                        shipType.push(0.04);
                        shipDyandEn.push("永久型");

                        break;
                }

            }

        }


    })();

    shipType.push(shipDyandEn);
    return shipType;
}


function createNewShip() {

    var ship = (function () {
        for (var i = 1; i < 5; i++) {

            if (shipNum[i - 1] == "0") {
                var ship = new Ship(i.toString(), getShipType());
                shipNum[i - 1] = i.toString();
                shipsNum++;
                break;
            }
        }
        return ship;
    })();
    addShipInfo(ship);
    showShipControl(ship);
    repaint(ship);


}

//初始化函数
function init() {
    initPlant();
    initEvent();
}
init();
