/*
 如图，实现一个类似棋盘的格子空间，每个格子用两个数字可以定位，一个红正方形的DOM在这个空间内，正方形中的蓝色边表示这是他的正面，有一个input输入框
 在输入框中允许输入如下指令，按下按钮后，使得正方形做相应动作
 GO：向蓝色边所面向的方向前进一格（一格等同于正方形的边长）
 TUN LEF：向左转（逆时针旋转90度）
 TUN RIG：向右转（顺时针旋转90度）
 TUN BAC：向右转（旋转180度）
 移动不能超出格子空间
 对于正方形的移动增加相应动画，包括移动和旋转
 每个指令的执行时间是1s（可以自己调整）
 增加新的指令如下：
 TRA LEF：向屏幕的左侧移动一格，方向不变
 TRA TOP：向屏幕的上面移动一格，方向不变
 TRA RIG：向屏幕的右侧移动一格，方向不变
 TRA BOT：向屏幕的下面移动一格，方向不变
 MOV LEF：方向转向屏幕左侧，并向屏幕的左侧移动一格
 MOV TOP：方向转向屏幕上面，向屏幕的上面移动一格
 MOV RIG：方向转向屏幕右侧，向屏幕的右侧移动一格
 MOV BOT：方向转向屏幕下面，向屏幕的下面移动一格
 如图，命令输入框由input变为textarea，可以允许输入多条指令，每一行一条
 textarea左侧有一列可以显示当前行数的列（代码行数列），列数保持和textarea中一致
 当textarea发生上下滚动时，代码行数列同步滚动
 能够判断指令是否合法，不合法的指令给出提示（如图）
 点击执行时，依次逐条执行所有命令
 对于GO，TRA以及MOV指令增加可以移动格子数量的参数，例如
 GO 3：向当前方向前进三格
 TRA TOP 2：向屏幕上方平移两格
 MOV RIG 4：方向转向屏幕右侧，向屏幕的右侧移动四格

 如图，新增元素“墙”，墙是正方形不可进入、越过的区域
 新增修墙的指令，BUILD，执行指令时，会在当前方块面对的方向前修建一格墙壁，如果被指定修墙的地方超过边界墙或者已经有墙了，则取消修墙操作，并调用浏览器的console.log方法打印一个错误日志
 新增粉刷的指令，BRU color，color是一个字符串，保持和css中颜色编码一致。执行指令时，如果当前方块蓝色边面对方向有紧相邻的墙，则将这个墙颜色改为参数颜色，如果没有，则通过调用浏览器的console.log方法，打印一个错误日志
 尝试写一段代码，实现在空间内修建一个长长的五颜六色的墙或者有趣的图形
 新增一个按钮，可以在空间内随机生成一些墙
 增加一个指令：MOV TO x, y，会使得方块从当前位置移动到坐标为x，y的地方，移动过程中不能进入墙所在的地方，寻路算法请自行选择并实现，不做具体要求
 */


var stoneSta = [[5, 5, "top"],[6,7,"top"]];
var walls = [[2,2],[3,3]];       //定义需要展示的墙
var orderRows = 1;                      //计算命令行数


//初始化事件
function initEvent() {
    document.getElementById("go").onclick = function (e) {
        switch (e.target.id) {
            case "carryOut":

                dealOrders();
                repaintStone(walls);
                repaintStone(stoneSta);

                break;
            case  "refresh":

                break;

        }
    }
    document.getElementById("orders").onkeydown = showOrderRows;


}

function drawNum(elem, locStart, allLen, num, isHor, numStart) {
    (function () {
        if (elem.getContext) {
            var context = elem.getContext("2d");
            context.fillStyle = "#000000";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.font = "bold 20px '楷体'";
            for (var i = 0; i < num; i++) {
                context.fillText((i + numStart).toString(), locStart[0], locStart[1]);
                if (isHor) {
                    locStart[0] += allLen / num;
                } else {
                    locStart[1] += allLen / num;
                }
            }

        }
    })();


}

function drawLine(elem, locStart, len, num) {
    if (elem.getContext) {
        var context = elem.getContext("2d");
        context.beginPath();
        context.strokeStyle = "#CCCCCC";
        context.moveTo(locStart[0], locStart[1]);
        (function () {
            var invariableX = locStart[0];
            var invariableY = locStart[1];
            for (var i = 0; i < num; i++) {
                locStart[0] += len / (num + 1);
                locStart[1] += len / (num + 1);
                context.moveTo(invariableX, locStart[1]);
                context.lineTo(len, locStart[1]);
                context.moveTo(locStart[0], invariableY);
                context.lineTo(locStart[0], len);
            }
            context.stroke();
        })();
    }
}
function initBoard() {
    var numTop = document.getElementById("topNum");
    var numLeft = document.getElementById("leftNum");
    var grid = document.getElementById("grid");
    drawNum(numTop, [20, 20], 400, 10, true, 1);
    drawNum(numLeft, [20, 20], 400, 10, false, 1);
    drawLine(grid, [0, 0], 400, 9);
}


//画石头
function repaintStone(state) {
    (function () {
        var grid = document.getElementById("repaintGrid");
        var i=0;
        if (grid.getContext) {
            var context = grid.getContext("2d");
            if (state[0].length == 3) {
               setTimeout(function(){
                   if(i<state.length){
                       if ((i-1>-1)) {
                           context.clearRect(state[i-1][0] * 40, state[i-1][1] * 40, 40, 40);
                       }
                       switch (state[i][2]) {
                           case "top":
                               context.fillStyle = "#0302FE";
                               context.fillRect(state[i][0] * 40, state[i][1] * 40, 40, 10);
                               context.fillStyle = "#FD0002";
                               context.fillRect(state[i][0] * 40, state[i][1] * 40 + 10, 40, 30);
                               break;

                           case  "bottom":
                               context.fillStyle = "#FD0002";
                               context.fillRect(state[i][0] * 40, state[i][1] * 40, 40, 30);
                               context.fillStyle = "#0302FE";
                               context.fillRect(state[i][0] * 40, state[i][1] * 40 + 30, 40, 10);

                               break;

                           case "left":

                               context.fillStyle = "#0302FE";
                               context.fillRect(state[i][0] * 40, state[i][1] * 40, 10, 40);
                               context.fillStyle = "#FD0002";
                               context.fillRect(state[i][0] * 40 + 10, state[i][1] * 40, 30, 40);
                               break;

                           case "right":
                               context.fillStyle = "#FD0002";
                               context.fillRect(state[i][0] * 40, state[i][1] * 40, 30, 40);
                               context.fillStyle = "#0302FE";
                               context.fillRect(state[i][0] * 40 + 30, state[i][1] * 40, 10, 40);
                               break;
                       }
                       i++;
                       setTimeout(arguments.callee,200);

                   }




               },200);

            }else {
               for(var j=state.length;j--;){
                   context.fillStyle = "#CCCCCC";
                   context.fillRect(state[j][0] * 40, state[j][1] * 40, 40, 40);
               }


            }


        }


    })();

}
function showOrderRows(e) {

    if (e.keyCode == 13 || e.keyCode == 10) {
        orderRows++;
        var orderNum = document.getElementById("orderNum");
        if (orderNum.getContext) {
            var context = orderNum.getContext("2d");
            context.clearRect(0, 0, 30, 206);
        }
        if (orderRows < 10) {
            drawNum(orderNum, [15, 15], 20 * orderRows, orderRows, false, 1);
        } else {
            drawNum(orderNum, [15, 15], 180, 9, false, orderRows - 9);
        }
    }


}
function dealOrders() {
    //tun tra mov go /mov to
    stoneSta.splice(0,stoneSta.length-1);
    (function () {
        var ordersElem = document.getElementById("orders");
        var ordersArr = ordersElem.value.split("\n");
        var orderLen = ordersArr.length;
        for (var i = 0; i<orderLen;i++) {
            switch (ordersArr[i].substr(0, 3).trim().length) {
                case 2:
                    var order = ordersArr[i].substr(3).trim();
                    if (ordersArr[i].substr(0, 3).trim() == "go") {
                        if (order) {
                            switch (stoneSta[i][2]) {
                                case "top":
                                    if (stoneSta[i][1] - parseInt(order) > -1) {
                                        stoneSta.push([stoneSta[i][0], (stoneSta[i][1] - parseInt(order)),stoneSta[i][2]]);
                                    }
                                    break;
                                case "bottom":
                                    if (stoneSta[i][1] + parseInt(order) < 10) {
                                        stoneSta.push([stoneSta[i][0], (stoneSta[i][1] + parseInt(order)),stoneSta[i][2]]);

                                    }
                                    break;
                                case "left":
                                    if (stoneSta[i][0] - parseInt(order) > -1) {
                                        stoneSta.push([(stoneSta[i][0] - parseInt(order)), stoneSta[i][1],stoneSta[i][2]])
                                    }
                                    break;
                                case "right":
                                    if (stoneSta[i][0] + parseInt(order) < 10) {
                                        stoneSta.push([(stoneSta[i][0] + parseInt(order)), stoneSta[i][1],stoneSta[i][2]])

                                    }
                                    break;
                            }


                        }
                    }
                    break;
                case 3:

                    break;
                default:
                    alert("命令错误");
            }

        }

    })();

}
function initAll() {
    initBoard();
    initEvent();
    repaintStone(walls);
    repaintStone(stoneSta);






}
initAll();



