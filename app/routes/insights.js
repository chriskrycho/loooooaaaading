import Route from '@ember/routing/route';
import { getPromise } from '../utils/get-data';

export default class InsightsRoute extends Route {
  model() {
    return getPromise('HALLO', 1000);
  }
}
