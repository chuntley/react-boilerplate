
import SagaTester from 'redux-saga-tester';

import * as types from '../types';
import * as saga from './sample';

describe('Saga: Sample', () => {
  it('runs initial load', () => {
    const sagaTester = new SagaTester({});
    sagaTester.start(saga.initialLoadSaga);
    sagaTester.dispatch({ type: types.ADD_INITIAL_LOAD });
    sagaTester.getCalledActions().should.eql([
      { type: 'ADD_INITIAL_LOAD_PROGRESS' },
      { type: 'ADD_INITIAL_LOAD_COMPLETE' },
      { type: 'ADD_INITIAL_LOAD' },
    ]);
  });

  it('runs increment', async () => {
    const sagaTester = new SagaTester({});
    sagaTester.start(saga.incrementSaga);
    sagaTester.getCalledActions().should.eql([
      { type: 'INCREMENT_ONE' },
    ]);
  });
});
