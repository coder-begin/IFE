/**
 * Created by rulersex on 2016/12/4.
 */
//两个参数，第一个是要加载的js文件的路径，第二个文件是一个function，表示文件加载完毕后要执行的内容
function  addCode(url,callback){
    var script=document.createElement("script");
    script.type="text/javascript";
    if(script.readyState){//ie:判断是否存在readystate属性，有就是ie
        //判断是否加载完毕，加载完毕就卸载事件处理
        script.onreadystatechange=function(){
            if(script.readyState=="loaded"||script.readyState=="complete"){
                script.onreadystatechange=null;//卸载事件处理
                callback();
            }


        };


    }else{
        script.onload=function(){

            callback();

        };
    }
        script.src=url;
    document.getElementsByTagName("head")[0].appendChild(script);

}