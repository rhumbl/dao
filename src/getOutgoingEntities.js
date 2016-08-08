
import _ from 'lodash'
import getEntityById from './getEntityById'

function getOutgoingEntities(entityId, relationshipTypes, data) {
  var fnName = 'getOutgoingEntities';

  var results = _.uniq(_.compact( _.map( data.relationships, function(e) {
   if (relationshipTypes.indexOf(e.type, data) > -1 && e.sourceId == entityId) return getEntityById(e.targetId, data.entities);
  }, this)));


  return results;
}

export default getOutgoingEntities
