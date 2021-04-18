/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-empty-function */
import {
  InsertQueryBuilder,
  Repository,
  SelectQueryBuilder,
  DeleteQueryBuilder,
} from 'typeorm';
import { mock } from 'jest-mock-extended';

interface EntityType {}

const repositoryMock = mock<Repository<EntityType>>();
const builderMock = mock<SelectQueryBuilder<EntityType>>();
const insertMock = mock<InsertQueryBuilder<EntityType>>();
const deleteMock = mock<DeleteQueryBuilder<EntityType>>();

jest.mock('typeorm', () => {
  builderMock.where.mockReturnThis();
  builderMock.andWhere.mockReturnThis();
  builderMock.select.mockReturnThis();
  builderMock.delete.mockReturnValue(deleteMock);
  builderMock.insert.mockReturnValue(insertMock);

  deleteMock.where.mockReturnThis();
  deleteMock.andWhere.mockReturnThis();

  insertMock.into.mockReturnThis();
  insertMock.values.mockReturnThis();
  insertMock.orUpdate.mockReturnThis();
  insertMock.returning.mockReturnThis();

  repositoryMock.createQueryBuilder.mockReturnValue(builderMock);

  return {
    BaseEntity: class Mock {},

    getRepository: () => repositoryMock,
    ObjectType: () => jest.fn(),
    Entity: () => jest.fn(),
    InputType: () => jest.fn(),
    Index: () => jest.fn(),
    PrimaryColumn: () => jest.fn(),
    PrimaryGeneratedColumn: () => jest.fn(),
    Column: () => jest.fn(),
    CreateDateColumn: () => jest.fn(),
    UpdateDateColumn: () => jest.fn(),
    OneToMany: () => jest.fn(),
    ManyToOne: () => jest.fn(),
    JoinColumn: () => jest.fn(),
  };
});

export { builderMock, repositoryMock, insertMock, deleteMock };
