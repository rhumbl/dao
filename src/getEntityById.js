
import _ from 'lodash'

function getEntityById(entityId, entities) {
  var fnName = 'getEntityById';
  var result = _.find(entities, {id: entityId});

  return result;
}

export default getEntityById
