'use strict';
import data from './test-data.js'
import getPathway from '../src/getPathway'

describe('getPathway', function () {
  it('should getPathway of MATH1 and MATH2', function (done) {
    var result = getPathway(['MATH1', 'MATH2'], ['REQUIRES'], 'INCOMING', data);
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
        {
          id: 'AERO2',
          type: 'Class',
          name: 'Structural Mechanics'
        },
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
        },
      ]
    })

    done();
  });

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
