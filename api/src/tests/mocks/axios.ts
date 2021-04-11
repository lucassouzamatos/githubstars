import axios, { AxiosRequestConfig, AxiosTransformer } from 'axios';

class AxiosMock {
  constructor(private mockedAxios = axios as jest.Mocked<typeof axios>) {}

  public getMock() {
    return this.mockedAxios;
  }

  public clearMock() {
    this.mockedAxios.request.mockImplementation(() => Promise.resolve());
  }

  public request<T>(response: T): AxiosMock {
    this.mockedAxios.request.mockImplementationOnce(
      (data: AxiosRequestConfig) => {
        return Promise.resolve({
          data: (data?.transformResponse as AxiosTransformer[]).reduce(
            (acc, fn) => fn(acc),
            response
          ),
        });
      }
    );

    return this;
  }
}

export default new AxiosMock();
