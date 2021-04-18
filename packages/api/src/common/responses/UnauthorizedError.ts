import Response from '@common/defaults/Response';

export default class UnauthorizedError implements Response {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 401) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
