import { createConnection, getConnectionOptions, Connection } from 'typeorm';

export const getConnection = async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV === 'test'
          ? `${defaultOptions.database}_tests`
          : defaultOptions.database,
    })
  );
};
