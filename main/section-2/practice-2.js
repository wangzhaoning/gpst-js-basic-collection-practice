'use strict';
module.exports = function countSameElements(collection) {
    let col=[];
    let result=[];
    for(var c of collection)
    {
      if(c.length>1)
      {
        if(col[c.charAt(0)]==null)
        {
            col[c.charAt(0)]=parseInt(c.replace(/[^0-9]/ig,""));
        }
      }
       else if(col[c]==null)
            col[c]=1;
        else{col[c]+=1;}
    }
    for(let i in col)
    {
        result.push({"key":i,"count":col[i]});
    }
    return result;
}
