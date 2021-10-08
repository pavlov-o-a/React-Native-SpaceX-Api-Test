import ApiRequest from '../../../shared/entities/api-request';

const LaunchesEndpoint = 'v5/launches';
export function getLaunchesRequest(baseRequest: ApiRequest) {
  return new ApiRequest(baseRequest.url + LaunchesEndpoint);
}
