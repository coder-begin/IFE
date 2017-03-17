/**
 * Created by rulersex on 2016/12/16.
 */


self.onmessage=function(e){
    var showNum=0;
    var num= e.data ;
    for(var i=0;i<num;i++){
        showNum+=i;
    }
    self.postMessage(showNum);
};
