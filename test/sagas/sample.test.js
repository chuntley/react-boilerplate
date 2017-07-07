import { put } from 'redux-saga/effects';
import { expect } from 'chai';

import * as actions from '../../src/actions/sample';
import * as sampleSaga from '../../src/sagas/sample';

describe('Saga: Sample', function () {
  it('runs initial load', function () {
    const gen = sampleSaga.initialLoadSaga();

    expect(gen.next().value).to.deep.equal(put(actions.addInitialLoadProgress()));
    expect(gen.next().value).to.deep.equal(put(actions.addInitialLoadComplete()));
    gen.next();
  });

  it('runs increment', function () {
    const gen = sampleSaga.incrementSaga();

    expect(gen.next().value).to.deep.equal(put(actions.incrementOne()));
    gen.next();
  });
});
