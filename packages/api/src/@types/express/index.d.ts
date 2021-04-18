declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }

  export interface Response {
    error: (error: any) => this;
  }
}
