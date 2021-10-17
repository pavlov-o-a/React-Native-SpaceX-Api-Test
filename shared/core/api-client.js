import ApiRequest from '../entities/api-request';
import Delay from '../utils/delay';

export default class ApiClient {
  constructor(baseUrl: String = '', options = null) {
    this.baseUrl = baseUrl;
    this.options = options;
  }

  fetchJson(apiRequest: ApiRequest): Promise<String> {
    return Delay(1000) // Remove in prod flavour. For loading state visibility.
      .then(() => fetch(apiRequest.url, apiRequest.options))
      .then(response => response.json());
  }
}
