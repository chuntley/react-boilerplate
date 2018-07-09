import sample from './sample';
// import another from './another';

export default function* rootSaga() {
  yield [
    ...sample,
    // ...another,
  ];
}
