'use strict';
import data from './test-data.js'
import getEdgeSet from '../src/getEdgeSet'

describe('getEdgeSet', function () {
  it('should getEdgeSet of MATH2', function (done) {
    var result = getEdgeSet('MATH2', ['REQUIRES', 'HAS_PARENT_OF'], data);
    result.should.deepEqual([
      {
        id: 'MATH2-HAS_PARENT_OF-MATH',
        type: 'HAS_PARENT_OF',
        sourceId: 'MATH2',
        targetId: 'MATH'
      },
      {
        id: 'MATH2-REQUIRES-MATH1',
        type: 'REQUIRES',
        sourceId: 'MATH2',
        targetId: 'MATH1'
      },
      {
        id: 'AERO2-REQUIRES-MATH2',
        type: 'REQUIRES',
        sourceId: 'AERO2',
        targetId: 'MATH2'
      },
      {
        id: 'AERO3-REQUIRES-MATH2',
        type: 'REQUIRES',
        sourceId: 'AERO3',
        targetId: 'MATH2'
      },
      {
        id: 'AERO4-REQUIRES-MATH2',
        type: 'REQUIRES',
        sourceId: 'AERO4',
        targetId: 'MATH2'
      }
    ]);

    done();
  });
});
