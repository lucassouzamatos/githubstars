import {MigrationInterface, QueryRunner, TableUnique} from "typeorm";

export class CreateUniqueFavorite1618968062391 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createUniqueConstraint(
        "favorites", 
        new TableUnique({
          name: "FavoriteRepositoryUserUnique",
          columnNames: ["repository_id", "user_id"]
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropUniqueConstraint(
        "favorites", 
        "FavoriteRepositoryUserUnique"
      );
    }
}
