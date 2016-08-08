'use strict';
import data from './test-data.js'
import getPathway from '../src/getPathway'
import rankDAG from '../src/rankDAG'
import getOutgoingEntitiesAll from '../src/getOutgoingEntitiesAll'

describe('rankDAG', function () {
  it('should get the top sort of the nodes around AERO5', function (done) {
    var dag = getPathway('AERO5', ['REQUIRES'], 'OUTGOING_ALL', data);
    var result = rankDAG(dag, (item) => getOutgoingEntitiesAll(item.id, ['REQUIRES'], data));

    result.should.deepEqual({
      0: [
        {
          id: 'MATH1',
          type: 'Class',
          name: 'Calculus I'
        },
      ],
      1: [
        {
          id: 'MATH2',
          type: 'Class',
          name: 'Calculus II'
        },
      ],
      2: [
        {
          id: 'AERO3',
          type: 'Class',
          name: 'Thermodynamics'
        },
        {
          id: 'AERO4',
          type: 'Class',
          name: 'Fluid Mechanics'
        },
      ],
      3: [
        {
          id: 'AERO5',
          type: 'Class',
          name: 'Aerodynamics'
        },
      ]
    });


    done();
  });

});
