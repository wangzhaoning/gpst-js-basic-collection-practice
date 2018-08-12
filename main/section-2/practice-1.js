'use strict';

module.exports = function countSameElements(collection) {
  let col=[];
  let result=[];
  for(var c of collection)
  {
    if(col[c]==null)
    col[c]=1;
    else{col[c]+=1;}
  }
for(let i in col)
{
  result.push({"key":i,"count":col[i]});
}
  return result;
}
