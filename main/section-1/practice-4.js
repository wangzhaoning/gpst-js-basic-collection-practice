'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  //collectionA=collectionA.join().split(',');
  return collectionA.map(e=>e.key).filter(e=>objectB.value.includes(e));
}
