# dao
JavaScript library for semantic graph traversal over POJOs. Dao is a collection of pure functions -- mix and match as you please.

## Getting dao
```
npm install --save rhumbl-dao
```

## Using dao
With ES6 imports:
```
import dao from 'dao'

dao.getEntityById(...);
```

With CommonJS
```
var dao = require('dao');

dao.getPathway(...);
```

As an SFX bundle:
```
<script src="dist/dao.js"></script>
```
Then anywhere in your JavaScript, you can call the globally-available `dao` object:
```
dao.getIncomingEntities(...)
```

## Why dao?
When working with graph-like structures, we often need to query things like nodes, links and certain pathways. Dao makes it easy to search and select from your data through convenience methods.

## Required dao data structure
Dao requires that you have a data object that represents a graph. This is nothing more than a POJO (plain-old JavaScript object and looks like this:
```
var graphData = {
  entities: [
    {id: 'Leonard Nimroy'},
    {id: 'Zachary Quinto'},
    {id: 'Gene Roddenberry'},
    {id: 'Star Trek'},
    {id: 'Heroes'}
    ...
  ],
  relationships: [
    {sourceId: '4', targetId: '8', type: 'IS_FRIENDS_WITH'},
    {sourceId: '4', targetId: '8', type: 'STARRED_IN'},
    {sourceId: '4', targetId: '8', type: 'DIRECTED'},
    ...
  ]
}
```

Entities must contain a required `id` attribute, and relationships have the 3 required attributes of `type`, `sourceId` and `targetId`. You can attach anything else you want to these objects.

## API Reference

### dao.getEntityById(entityId, entities)

Simple wrapper on top of lodash's `_.find`

**Arguments**

1. entityId (*Number*): The entity's id you're trying to get
2. entities (*Array*): The array of entities to search through


### dao.getIncomingEntities(entityId, relationshipTypes, data)

Given entity A, get the entities B, C...,Z that have edges going towards entity A.

**Example**
```
var entities = dao.getIncomingEntities('Star Trek', ['STARRED_IN'], graphData);
// [{id: 'Leonard Nimroy'}, {id: 'Zachary Quinto'}]
```

**Arguments**

1. entityId (*Number*): The id of the entity for which you
2. relationshipTypes (*Array*): The relationship types that are admissible
3. data (*Object*): The required data structure to search through (see required dao data structure above)

### dao.getIncomingEntitiesAll(entityId, relationshipTypes, data)

Given entity A, get the entities B, C...,Z that have edges going towards entity A, *and* all the entities that are connected to those entities.

**Arguments**

1. entityId (*Number*): The id of the entity for which you
2. relationshipTypes (*Array*): The relationship types that are admissible
3. data (*Object*): The required data structure to search through (see required dao data structure above)

### dao.getOutgoingEntities(entityId, relationshipTypes, data)

Given entity A, get the entities B, C...,Z that have edges going from entity A to those entities

**Example**
```
var entities = dao.getOutgoingEntities('Zachary Quinto', ['STARRED_IN'], graphData);
// [{id: 'Star Trek'}, {id: 'Heroes'}]
```

**Arguments**

1. entityId (*Number*): The id of the entity for which you
2. relationshipTypes (*Array*): The relationship types that are admissible
3. data (*Object*): The required data structure to search through (see required dao data structure above)

### dao.getOutgoingEntitiesAll(entityId, relationshipTypes, data)

Given entity A, get the entities B, C...,Z that have edges going from entity A to those entities, *and* all the entities that are connected to those entities.

**Arguments**

1. entityId (*Number*): The id of the entity for which you
2. relationshipTypes (*Array*): The relationship types that are admissible
3. data (*Object*): The required data structure to search through (see required dao data structure above)

### dao.getPathway(entityId, relationshipTypes, algorithmName, data)

Given entity A, get the entities B, C...,Z that have edges going from entity A to those entities, and the edges comprising those pathways. The algorithmName lets you specify whether you want the immediately-connected nodes or if you want to traverse the entire pathway.

**Arguments**

1. entityId (*Number*): The id of the entity for which you
2. relationshipTypes (*Array*): The relationship types that are admissible
3. algorithmName (*String*): *INCOMING* | *INCOMING_ALL* | *OUTGOING* | *OUTGOING_ALL*
4. data (*Object*): The required data structure to search through (see required dao data structure above)

### dao.rankDAG(dag, iterateeFn, maxIterations)

Given a collection of nodes and entities, compute the ranking of the graph.

**Arguments**

1. dag (*Object*): Must be an object of nodes. It looks like:
```
var dag = {
  nodes: [
    {id: 'my node'}
    ...
  ],
}
```
2. iterateeFn (*function*): For each node, computes the ranking for the node
3. maxIterations = 10 (*number*): Optional integer setting the threshold for when the function will trigger a warning. It is assumed that your iteratee function yields an acyclic graph, so this gives you a warning when you reach the specified depth threshold

### dao.getEdgeSet(entityIds, relationshipTypes, data)

Given a set of entity ids, returns the collection of edges that connect the entities

**Arguments**

1. entityIds (*Array*): Array of entity ids
2. relationshipTypes (*function*): The relationship types that are admissible
3. data (*Object*): The required data structure to search through (see required dao data structure above)

## About
Built by [Rhumbl](http://rhumbl.com), the graph visualization engine for non-developers.


## License

This content is released under the (http://opensource.org/licenses/MIT) MIT License.
