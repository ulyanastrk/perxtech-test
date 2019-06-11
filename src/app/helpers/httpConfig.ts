import {environment} from '../../environments/environment';

export class HttpConfig {
  static get API_URL() {
    return environment.basePath + '/assets/mock-data/example.json';
  }
}
