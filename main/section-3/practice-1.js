'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
     return collectionA.map(function (e) {
        if(objectB.value.includes(e.key))
         return e={"key":e.key,"count":e.count-1};
        return e;
    }
    );
}

