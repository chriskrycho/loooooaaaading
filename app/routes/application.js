import Route from '@ember/routing/route';
import { getAsyncData, getPromise } from '../utils/get-data';

export default class ApplicationRoute extends Route {
  model() {
    return getPromise(null, 2000, this);
  }
}
