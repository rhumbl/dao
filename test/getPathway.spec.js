'use strict';
import data from './test-data.js'
import getPathway from '../src/getPathway'

describe('getPathway', function () {
  it('should getPathway of MATH1', function (done) {
    var result = getPathway('MATH1', ['REQUIRES'], 'INCOMING', data);
    result.should.eql({
      nodes: [
        {
          id: 'MATH2',
          type: 'Class',
          name: 'Calculus II'
        },
        {
          id: 'MATH3',
          type: 'Class',
          name: 'Probability & Statistics'
        },
        {
          id: 'MATH1',
          type: 'Class',
          name: 'Calculus I'
        },
      ],
      edges: [
        {
          id: 'MATH2-REQUIRES-MATH1',
          type: 'REQUIRES',
          sourceId: 'MATH2',
          targetId: 'MATH1'
        },
        {
          id: 'MATH3-REQUIRES-MATH1',
          type: 'REQUIRES',
          sourceId: 'MATH3',
          targetId: 'MATH1'
        },
      ]
    })

    done();
  });
});
