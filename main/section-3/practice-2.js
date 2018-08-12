'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    return collectionA.map(function (e) {
            if(objectB.value.includes(e.key))
            {
              var num=Math.floor(e.count/3);
                return e={"key":e.key,"count":e.count-num};
            }
            return e;
        }
    );
}
