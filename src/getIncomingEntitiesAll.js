
import _ from 'lodash';
import getIncomingEntities from './getIncomingEntities';

function getIncomingEntitiesAll(entityId, relationshipTypes, data) {
  let fnName = 'getIncomingEntitiesAll';
  if (!data) {
    console.error(fnName, 'data not provided.');
  };

  let results = [];
  let haveChecked = [];
  let traverse = function traverse(itemId) {
    let ps = getIncomingEntities(itemId, relationshipTypes, data);
    results = results.concat(ps);
    for (let i=0; i<ps.length; i++) {
      let p = ps[i];

      if (haveChecked.indexOf(p) === -1) {
        haveChecked.push(p);
        traverse.bind(this)(p.id);
      }
    }
  }.bind(this);

  traverse(entityId);

  return _.uniq(results);
}

export default getIncomingEntitiesAll
