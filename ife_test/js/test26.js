
var shipsNum=0;                                         //飞船标号，大于4就不能创建
var universe = document.getElementById("universe");     //获取宇宙地图
var control = document.getElementById("control");       //获取控制面板
var initLoc = initAddr();                               //初始化飞船路径
var shipNum = ["0","0","0","0"];                        //飞船标号保存

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

            address[j].push(300 + 200 * Math.sin(x));
            address[j].push(250 - 200 * Math.cos(y));
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
        context.arc(100, 100, 100, 0, 2 * Math.PI, false);
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
function  calcPro(){
    var num=Math.round(Math.random()*10);
    if(num>3){
        return true;
    }else{
        return false;
    }



}

//定义飞船对象
function Ship(ship_Num, x_Loc, y_Loc) {
    var t=this;
    this.x_index = 0;
    this.y_index = 0;
    this.nameNum = ship_Num;
    this.x = x_Loc;
    this.y = y_Loc;
    this.timeOut=null;
    this.energy = 100;
    this.flySpeed = 500;
    this.isFlying = false;
    this.isDestory=false;
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


    };
    this.desShip = function () {
        shipNum[this.nameNum-1]=0;
        shipsNum--;
        universe.removeChild(document.getElementById(this.nameNum));
        control.removeChild(document.getElementById("control"+this.nameNum));
        this.isDestory= true;

    }
    this.beginFly = function () {

        t.isFlying = true;
        clearTimeout(t.timeOut);
        setTimeout(function () {
                if(!t.isDestory){
                    if(t.energy>0&&t.isFlying){
                        t.x = Math.round(initLoc[t.x_index++][0]);
                        t.y = Math.round(initLoc[t.y_index++][1]);
                        t.energy -= Math.round(t.energy/50)+2;
                        repaint(t);
                        if (t.x_index > 39) {
                            t.x_index = 0;
                            t.y_index = 0;
                        }
                        t.timeOut= setTimeout(arguments.callee, t.flySpeed);



                    }else{
                        t.isFlying=false;
                        if(t.energy<100){
                            t.energy+=Math.round(t.energy/300)+1;
                            t.timeOut=setTimeout(arguments.callee, t.flySpeed);
                        }

                        repaint(t);

                    }

                }


        }, t.flySpeed);


    };


    this.control=function(controlId,address){
        switch (controlId){
            case 1:
                if(calcPro()){
                   setTimeout(function(){
                       t.beginFly(address);
                   },1000);
                }

                break;

            case 2:
                if(calcPro()){
                   setTimeout(function(){
                       t.stopFly();
                   },1000);

                }
                break;
            case  3:
                if(calcPro()){
                   setTimeout(function(){
                       t.desShip();
                   },1000);

                }
                break;


        }


    }


}
//冻结对象
Object.freeze(Ship);

//初始化飞船进入宇宙的动画
function intoUniverse(ship) {
    var i = 0;
    var j = 0;
    var takeOffWay = [[50, 0], [50, 30], [50, 60], [50, 90], [50, 120], [50, 150], [50, 180], [50, 210], [50, 240], [50, 270], [50, 300]];
    setTimeout(function () {
        if (i < takeOffWay.length) {
            ship.setX(takeOffWay[i++][1]);
            ship.setY(takeOffWay[j++][0]);
            var energy = ship.getEnergy();
            ship.setEnergy(--energy);
            repaint(ship);
            setTimeout(arguments.callee, 1000);

        }


    }, 2000);


}

//重绘飞船位置和能量等信息
function repaint(myShip) {
    var doc = document;

            if (doc.getElementById(myShip.getNameNum().toString())) {
                var ship = doc.getElementById(myShip.getNameNum().toString());
                ship.style.left = myShip.getX() + "px";
                ship.style.top = myShip.getY() + "px";
                drawShip(ship,myShip);

            } else {
                var ship = document.createElement("canvas");
                var style = ship.style;

                ship.id = myShip.getNameNum();
                ship.width = 80;
                ship.height = 40;

                style.position = "absolute";
                style.left = myShip.getX() + "px";

                style.top = myShip.getY() + "px";

                 drawShip(ship,myShip);
                universe.appendChild(ship);
            }





}

//画飞船
function  drawShip(createdShip,thisShip){
    var context = createdShip.getContext("2d");
    context.clearRect(0, 0, 80, 20);
    context.fillStyle = "blue";
    context.font = "bold 16px '楷体'";
    context.fillRect(0, 0, 80, 40);
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "black";
    context.fillText(thisShip.getNameNum().toString(), 10, 20);
    context.fillText("号-", 30, 20);
    context.fillText(thisShip.getEnergy().toString(), 55, 20);
    context.fillText("%", 73, 20);
}

//创建控制飞船的控制台
function showShipControl(ship) {
    var doc = document;
    var instruct = doc.createElement("div");
    var beginFly = doc.createElement("button");
    var stopFly = doc.createElement("button");
    var destroyShip = doc.createElement("button");
    var text = doc.createElement("span");
    var createShip = doc.getElementById("newShipFly");

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
    control.insertBefore(instruct, createShip);
}

//创建飞船对象
function createNewShip() {

    var xBegin = 100;
    var yBegin = 450;
   var ship=(function(){

        for(var i=1;i<5;i++){

                if(shipNum[i-1]=="0"){
                    var ship = new Ship(i.toString(), xBegin, yBegin);
                    shipNum[i-1]= i.toString();
                    shipsNum++;
                    break;
                }


        }
            return ship;
    })();
    showShipControl(ship);
    intoUniverse(ship);


}

//初始化函数
function init() {
    initPlant();
    initEvent();
}
init();
