
import _ from 'lodash'
import getOutgoingEntities from './getOutgoingEntities'

function getOutgoingEntitiesAll(entityId, relationshipTypes, data) {
  var fnName = 'getOutgoingEntitiesAll';
  if (!data) {
    console.error(fnName, 'data not provided.');
  };

  var results = [];
  var haveChecked = [];
  var traverse = function traverse(itemId) {
    var ps = getOutgoingEntities(itemId, relationshipTypes, data);
    results = results.concat(ps);
    for (var i=0; i<ps.length; i++) {
      var p = ps[i];

      if (haveChecked.indexOf(p) === -1) {
        haveChecked.push(p);
        traverse.bind(this)(p.id);
      }
    }
  }.bind(this);

  traverse(entityId);

  return _.uniq(results);
}

export default getOutgoingEntitiesAll
