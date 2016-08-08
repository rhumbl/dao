import _ from 'lodash'
import getIncomingEntitiesAll from './getIncomingEntitiesAll'
import getIncomingEntities  from './getIncomingEntities'
import getOutgoingEntitiesAll from './getOutgoingEntitiesAll'
import getOutgoingEntities from './getOutgoingEntities'
import getEdgeSet from './getEdgeSet'
import getEntityById from './getEntityById'


function getPathway(entityId, relationshipTypes, algorithmName, data) {
  let nodes = [];

  if (!relationshipTypes || relationshipTypes.length === 0) {
    console.error('getPathway: relationshipTypes[] cannot be null');
  }

  if (algorithmName === 'INCOMING_ALL') {
    nodes = getIncomingEntitiesAll(entityId, relationshipTypes, data);

  } else if (algorithmName === 'INCOMING') {
    nodes = getIncomingEntities(entityId, relationshipTypes, data);

  } else if (algorithmName === 'OUTGOING_ALL') {
    nodes = getOutgoingEntitiesAll(entityId, relationshipTypes, data);

  } else if (algorithmName === 'OUTGOING') {
    nodes = getOutgoingEntities(entityId, relationshipTypes, data);
    // console.log(nodes);

  } else if (algorithmName === 'INCOMING-OUTGOING') {
    let nodesIncoming = getIncomingEntities(entityId, relationshipTypes, data);
    let nodesOutgoing = getOutgoingEntities(entityId, relationshipTypes, data);
    nodes = nodesIncoming.concat(nodesOutgoing);

  } else {
    console.error('algorithmName', algorithmName, 'not recognized');
  }

  nodes = (nodes || []).concat(getEntityById(entityId, data.entities));
  let edges = getEdgeSet(_.map(nodes, 'id'), relationshipTypes, data);


  return {nodes, edges};
}

export default getPathway
