
![Dao](images/dao.png)

# Dao
Dao is a JavaScript library for graph traversal.

## Getting Dao
```
npm install --save rhumbl-dao
```

## Using Dao
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

## Why dao?
When working with graph-like structures, we often need to query things like nodes, links and certain pathways. For example, if you have a data structure like:
```
{
  entities: [
    {name: 'Leonard Nimroy'},
    {name: 'Zachary Quinto'},
    {name: 'Gene Roddenberry'},
    ...
  ],
  relationships: [
    {sourceId: '4', targetId: '8', type: 'STARRED_IN'},
    {sourceId: '4', targetId: '8', type: 'DIRECTED'},
    ...
  ]
}
```

Dao makes it easy for you to query over your data structure.

## Examples


## Dependencies
Only lodash. It's bundled along.


## License

This content is released under the (http://opensource.org/licenses/MIT) MIT License.
