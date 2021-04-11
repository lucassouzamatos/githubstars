export default interface Response {
  readonly message: string;
  readonly statusCode: number;
  readonly details?: Record<string, unknown>;
}
