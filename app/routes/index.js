import Route from '@ember/routing/route';
import { getPromise } from '../utils/get-data';

export default class IndexRoute extends Route {
  model() {
    return getPromise(123, 1000);
  }
}
