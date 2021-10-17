import ApiRequest from '../../../shared/entities/api-request';

const CompanyInfoEndpoint = 'v4/company';
export function getCompanyInfoRequest(baseUrl: String, options) {
  return new ApiRequest(baseUrl + CompanyInfoEndpoint);
}
