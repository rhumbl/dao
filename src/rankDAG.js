
/** rankDAG: constructs the ranking of each node in the given Directed Acyclic Graph
*/
function rankDAG(dag, iterateeFn, maxIterations = 10) {
  if (!dag) {
    console.error('DAG of {nodes: []} must be given');
  }

  let nodes = dag.nodes;

  let findDepthTraverse = function findDepthTraverse(arg, iterateeFn, iterations) {
    iterations++;
    var quantity = iterateeFn(arg);

    if (quantity.length == 0) {
      return 0;

    } else if (iterations > maxIterations) {
      console.warn('There may be a cycle:', arg.name);
      return 0;

    } else {
      var maxDepth = 0;
      for (var i=quantity.length; i--;) {
        maxDepth = Math.max(maxDepth, findDepthTraverse(quantity[i], iterateeFn, iterations));
      }
      return maxDepth + 1;
    }
  }

  let levels = {};
  for (var j=0; j<nodes.length; j++) {
    let iterations = 0;
    let depth = findDepthTraverse(nodes[j], iterateeFn, iterations);
    levels[depth] = levels[depth] || [];
    levels[depth].push(nodes[j]);
  }

  return levels
}

export default rankDAG
