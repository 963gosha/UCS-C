module.exports = {
    transform:            {
        '^.+\\.ts$': 'ts-jest',
    },
    testEnvironment:      'node',
    roots:                ['<rootDir>/src'],
    testRegex:            '(test/**/*.spec.ts$',
    moduleFileExtensions: ['ts'],
}
