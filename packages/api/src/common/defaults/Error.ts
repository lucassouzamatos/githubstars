export default interface InternalError extends Error {
  readonly statusCode: number;
}
