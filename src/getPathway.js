import _ from 'lodash'
import getIncomingEntitiesAll from './getIncomingEntitiesAll'
import getIncomingEntities  from './getIncomingEntities'
import getOutgoingEntitiesAll from './getOutgoingEntitiesAll'
import getOutgoingEntities from './getOutgoingEntities'
import getEdgeSet from './getEdgeSet'
import getEntityById from './getEntityById'


function getPathway(entityIdOrIds, relationshipTypes, algorithmName, data) {
  let nodes = [];
  let edges = [];

  if (!relationshipTypes || relationshipTypes.length === 0) {
    console.error('getPathway: relationshipTypes[] cannot be null');
  }

  let entityIds = [];
  if (typeof entityIdOrIds === 'string') {
    entityIds.push(entityIdOrIds);
  } else {
    entityIds = entityIdOrIds;
  }

  for (var entityId of entityIds) {
    let pathwayNodes;
    if (algorithmName === 'INCOMING_ALL') {
      pathwayNodes = getIncomingEntitiesAll(entityId, relationshipTypes, data);

    } else if (algorithmName === 'INCOMING') {
      pathwayNodes = getIncomingEntities(entityId, relationshipTypes, data);

      console.log(pathwayNodes)

    } else if (algorithmName === 'OUTGOING_ALL') {
      pathwayNodes = getOutgoingEntitiesAll(entityId, relationshipTypes, data);

    } else if (algorithmName === 'OUTGOING') {
      pathwayNodes = getOutgoingEntities(entityId, relationshipTypes, data);
      // console.log(nodes);

    } else if (algorithmName === 'INCOMING-OUTGOING') {
      let nodesIncoming = getIncomingEntities(entityId, relationshipTypes, data);
      let nodesOutgoing = getOutgoingEntities(entityId, relationshipTypes, data);
      pathwayNodes = nodesIncoming.concat(nodesOutgoing);

    } else {
      console.error('algorithmName', algorithmName, 'not recognized');
    }

    nodes = [...nodes, ...pathwayNodes, getEntityById(entityId, data.entities)];
    console.log('nodes so far of', entityId, nodes);
    edges = edges.concat(getEdgeSet(_.map(nodes, 'id'), relationshipTypes, data));
  }

  nodes = _.uniqBy(nodes, 'id');
  edges = _.uniqBy(edges, 'id');

  return {nodes, edges};
}

export default getPathway
