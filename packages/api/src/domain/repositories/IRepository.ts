export interface PaginationParams {
  skip: number;
  take: number;
}

export interface PaginatedResponse<T> {
  data: T[];
}

export default interface Repository<T> {
  getPaginated(
    where?: Record<string, unknown>,
    params?: PaginationParams
  ): Promise<PaginatedResponse<T>>;
}
