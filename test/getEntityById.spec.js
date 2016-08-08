'use strict';
import _ from 'lodash'
import data from './test-data.js';

import getEntityById from '../src/getEntityById';

describe('getEntityById', function () {
  it('should getEntityById of CS1', function (done) {
    var entity = getEntityById('CS1', data.entities);

    entity.should.eql(
      {
        id: 'CS1',
        type: 'Class',
        name: 'Intro to Computer Science'
      },
    );

    done();
  });
});
