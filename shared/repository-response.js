export const ResponseType = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export class RepositoryResponse {
  constructor(type: ResponseType, data, error) {
    this.type = type;
    this.data = data;
    this.error = error;
  }

  static success(data) {
    return new RepositoryResponse(ResponseType.SUCCESS, data, null);
  }

  static error(error) {
    return new RepositoryResponse(ResponseType.ERROR, null, error);
  }
}
