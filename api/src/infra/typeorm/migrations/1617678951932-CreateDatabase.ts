import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabase1617678951932 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DO
        $do$
        BEGIN
          IF EXISTS (SELECT FROM pg_database WHERE datname = 'githubstars') THEN
              RAISE NOTICE 'Database already exists';  -- optional
          ELSE
              PERFORM dblink_exec('dbname=' || current_database()  -- current db
                                , 'CREATE DATABASE githubstars');
          END IF;
        END
        $do$;
      `);
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
