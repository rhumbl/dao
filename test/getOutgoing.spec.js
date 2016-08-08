'use strict';
import _ from 'lodash'
import data from './test-data.js'

import getOutgoingEntities from '../src/getOutgoingEntities'
import getOutgoingEntitiesAll from '../src/getOutgoingEntitiesAll'

describe('getOutgoingEntities', function () {
  it('should getOutgoingEntities of AERO5', function (done) {
    var result = getOutgoingEntities('AERO5', ['REQUIRES'], data);
    result.should.deepEqual([
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
    ])

    done();
  });
});

describe('getOutgoingEntitiesAll', function () {
  it('should getOutgoingEntitiesAll of AERO5', function (done) {
    var result = getOutgoingEntitiesAll('AERO5', ['REQUIRES'], data);
    result.should.deepEqual([
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
      {
        id: 'MATH2',
        type: 'Class',
        name: 'Calculus II'
      },
      {
        id: 'MATH1',
        type: 'Class',
        name: 'Calculus I'
      },
    ]);

    done();
  });
});
