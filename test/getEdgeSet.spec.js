'use strict';
import data from './test-data.js'
import getEdgeSet from '../src/getEdgeSet'

describe('getEdgeSet', function () {
  it('should getEdgeSet of MATH2', function (done) {
    var result = getEdgeSet(['MATH2', 'AERO2', 'AERO4'], ['REQUIRES'], data);
    result.should.deepEqual([
      {
        id: 'AERO2-REQUIRES-MATH2',
        type: 'REQUIRES',
        sourceId: 'AERO2',
        targetId: 'MATH2'
      },
      {
        id: 'AERO4-REQUIRES-MATH2',
        type: 'REQUIRES',
        sourceId: 'AERO4',
        targetId: 'MATH2'
      },
    ])

    done();
  });

});

describe('getEdgeSet', function () {
  it('should getEdgeSet of MATH2', function (done) {
    var result = getEdgeSet(['MATH2'], ['REQUIRES'], data);
    result.should.eql([])

    done();
  });
});
