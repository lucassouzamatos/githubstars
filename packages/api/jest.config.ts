import { pathsToModuleNameMapper } from 'ts-jest/utils';
import { compilerOptions } from './tsconfig.json';

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/src/**'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  coveragePathIgnorePatterns: [
    'node_modules',
    '.mock.ts',
    'domain',
    'infra/*',
    'tests/*',
    'entities',
    'common/*',
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  setupFiles: ['./jest-setup-file.ts'],
};
