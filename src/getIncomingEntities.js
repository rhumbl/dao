
import _ from 'lodash';
import getEntityById from './getEntityById';

function getIncomingEntities(entityId, relationshipTypes, data) {
  let fnName = 'getIncomingEntities';

  let results = _.uniq(_.compact( _.map( data.relationships, function(r) {
     if (relationshipTypes.indexOf(r.type) > -1 && r.targetId === entityId) {
       return getEntityById(r.sourceId, data.entities);
     }
  })));

  return results;
}

export default getIncomingEntities
