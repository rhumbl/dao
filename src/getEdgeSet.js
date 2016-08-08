
import _ from 'lodash';

/** getEdgeSet: returns the edges that are between the given set of nodes
*/
function getEdgeSet(entityIds, relationshipTypes, data) {
  return _.filter(data.relationships, function(r)  {
    // let matches = (r.targetId === entityId || r.sourceId === entityId);
    // return relationshipTypes.indexOf(r.type) > -1 && matches;

    let matchesDirection1 = entityIds.indexOf(r.targetId) > -1 && entityIds.indexOf(r.sourceId) > -1;
    let matchesDirection2 = entityIds.indexOf(r.sourceId) > -1 && entityIds.indexOf(r.targetId) > -1;

    return relationshipTypes.indexOf(r.type) > -1 && (matchesDirection1 || matchesDirection2);

  });
}

export default getEdgeSet
