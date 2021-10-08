import ApiRequest from '../../../shared/entities/api-request';

const CompanyInfoEndpoint = 'v4/company';
export function getCompanyInfoRequest(baseRequest: ApiRequest) {
  return new ApiRequest(baseRequest.url + CompanyInfoEndpoint);
}
