'use strict';
import _ from 'lodash'
import data from './test-data.js';

import getIncomingEntities from '../src/getIncomingEntities';
import getIncomingEntitiesAll from '../src/getIncomingEntitiesAll'

describe('getIncomingEntities', function () {
  it('should getIncomingEntities of REQUIRES type for CS1', function (done) {
    var result = getIncomingEntities('CS1', ['REQUIRES'], data);
    result.should.deepEqual([
      {
        id: 'CS3',
        type: 'Class',
        name: 'Algorithms'
      },
    ])

    done();
  });
});

describe('getIncomingEntitiesAll', function () {
  it('should getIncomingEntitiesAll of REQUIRES type for CS1', function (done) {
    var result = getIncomingEntitiesAll('CS1', ['REQUIRES'], data);
    result.should.deepEqual([
      {
        id: 'CS3',
        type: 'Class',
        name: 'Algorithms'
      },
      {
        id: 'CS4',
        type: 'Class',
        name: 'Software Engineering I'
      },
    ])

    done();
  });
});
