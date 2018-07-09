import { put } from 'redux-saga/effects';
import { expect } from 'chai';

import * as actions from '../../src/actions/sample';
import * as sampleSaga from '../../src/sagas/sample';

describe('Saga: Sample', () => {
  it('runs initial load', () => {
    const gen = sampleSaga.initialLoadSaga();

    expect(gen.next().value).to.deep.equal(put(actions.addInitialLoadProgress()));
    expect(gen.next().value).to.deep.equal(put(actions.addInitialLoadComplete()));
    gen.next();
  });

  it('runs increment', () => {
    const gen = sampleSaga.incrementSaga();

    expect(gen.next().value).to.deep.equal(put(actions.incrementOne()));
    gen.next();
  });
});
