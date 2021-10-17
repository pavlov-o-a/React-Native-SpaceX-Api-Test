import ApiRequest from '../../../shared/entities/api-request';

const LaunchesEndpoint = 'v5/launches';
export function getLaunchesRequest(baseUrl: String, options) {
  return new ApiRequest(baseUrl + LaunchesEndpoint);
}
