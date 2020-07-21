/*
    my name Mendege  this is my method base 这是我在世界上存在的证明-------------有一天也会变成存在过 微信 wangweiyan4653 欢迎一起探讨

*/ 



function MethodBase(){

    return this;
}
// 二分排序 
/*
    二分排序 返回排序以后的原类型数据
    obj.data  排序数组
    obj.mode  top 升序  bottom 降序 
    obj.type  array 数组  object 数组对象(内部元素是对象) 
    obj.key   如果是数组对象  需要传入 排序的可以
*/ 
MethodBase.prototype.binaryOrdering= function(obj={},internal_calls){
    let {mode="top",type = "array",key = "",data=[]} = obj;
    // 常规数组排序
    if(type==="array"){
        if(data.length<=1)return data;
        let rightArray = [];
        let leftArray = [];
        let shift;
        Array.isArray(data)&&(shift = data.shift())
        data.forEach((i,k)=>{
            if(i<shift){
                // leftArray.length?leftArray[leftArray.length-1]=i:leftArray.push(i) 
                leftArray.push(i) 
            }else{
                // leftArray.length?leftArray[leftArray.length-1]=i:leftArray.push(i) 
                rightArray.push(i) 
            }
        })

        if(mode==="top"){
            return this.binaryOrdering({data:leftArray,type:type,mode:mode}).concat([shift],this.binaryOrdering({data:rightArray,type:type,mode:mode}));
        }else{
            return this.binaryOrdering({data: rightArray,type:type,mode:mode}).concat([shift],this.binaryOrdering({data:leftArray,type:type,mode:mode}));
        }
    }

}


// 二分查找
MethodBase.prototype.binarySearch = function(obj={}){
        
}


var methodBase = new MethodBase();
