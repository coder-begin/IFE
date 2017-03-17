function addFloat(){

    var body=document.body;
    var screenHeight=window.screen.height;
    var screenWidth=window.screen.width;
    var divFullScreen=document.createElement("div");
    var floatAlert=document.createElement("div");
    var topWords=document.createElement("div");

    topWords.style.cssText="width:100%;font-size:25px;color:white;background-color:#803939;text-align:center";
    topWords.textContent="这是一个浮动层";
    divFullScreen.style.cssText="width:"+screenWidth+"px;height:"+screenHeight+"px;background-color:#E7ACAC";
    floatAlert.style.cssText="float:left;width:400px;height:300px;background-color:#FFFFFF;top:"+(screenHeight-400)/2+"px;left:"+(screenWidth-300)/2+"px;position:absolute";
    floatAlert.appendChild(topWords);
    divFullScreen.appendChild(floatAlert);

    body.insertBefore(divFullScreen,body.children[0]);

}
addFloat();