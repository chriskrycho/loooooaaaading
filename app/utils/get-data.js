import { load } from 'ember-async-data';

export function getAsyncData(value, delay, context) {
  return load(
    new Promise((resolve) => {
      setTimeout(() => resolve(value), delay);
    }),
    context
  );
}

export function getPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
}
