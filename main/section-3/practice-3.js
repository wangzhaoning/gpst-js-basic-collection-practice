'use strict';
module.exports = function createUpdatedCollection(collectionA, objectB) {
    let col=[];
    let result=[];
    collectionA.map(function (c) {
        if(col[c.charAt(0)]==null)
        {
            if(c.length>1)
                col[c.charAt(0)]=parseInt(c.replace(/[^0-9]/ig,""));
            else col[c.charAt(0)]=1;
        }
        else{
            if(c.length>1)
                col[c.charAt(0)]+=parseInt(c.replace(/[^0-9]/ig,""));
            else col[c.charAt(0)]+=1;
        }
        return col;
    });
    for(let i in col)
    {
        result.push({"key":i,"count":col[i]});
    }
    return result.map(function (e) {
            if(objectB.value.includes(e.key))
            {
                var num=Math.floor(e.count/3);
                return e={"key":e.key,"count":e.count-num};
            }
            return e;
        }
    );
}
