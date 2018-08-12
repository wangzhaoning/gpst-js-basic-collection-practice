'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(//function result(e)
       e=>collectionB.includes(e)
  );
}
