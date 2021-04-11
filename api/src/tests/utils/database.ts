import { Connection, getRepository, EntityMetadata } from 'typeorm';
import { getConnection } from '@infra/typeorm';

class TestDatabaseUtils {
  connection: Connection;

  constructor() {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error('This utils must be executed only for tests');
    }
  }

  async createConnection(): Promise<void> {
    this.connection = await getConnection();
  }

  async closeConnection(): Promise<void> {
    await this.cleanAll();
    await this.connection.close();
  }

  async cleanAll(): Promise<void> {
    const entities: EntityMetadata[] = this.connection.entityMetadatas;

    try {
      const query = entities.map(async (entity) => {
        const repository = getRepository(entity.name);
        await repository.query(`DELETE FROM ${entity.tableName};`);
      });

      await Promise.all(query);
    } catch (error) {
      throw new Error(`ERROR: Cleaning test db: ${error}`);
    }
  }
}

export default new TestDatabaseUtils();
