/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  preset: 'ts-jest',
  testEnvironment: 'node'
}
