import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRepository1617679740247 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "repositories",
        columns: [
          {
            name: "id",
            type: "uuid",
            isUnique: true,
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar(250)",
          },
          {
            name: "github_id",
            isUnique: true,
            type: "varchar(250)",
          },
          {
            name: "description",
            type: "text",
            isNullable: true,
          },
          {
            name: "url",
            type: "varchar(250)",
          },
          {
            name: "language",
            type: "varchar(250)",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("repositories");
  }
}
