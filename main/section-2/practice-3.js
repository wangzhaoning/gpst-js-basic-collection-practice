'use strict';

module.exports = function countSameElements(collection) {
    let col=[];
    let result=[];
    collection.map(function (c) {
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
        result.push({"name":i,"summary":col[i]});
    }
    return result;
}
