/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    rootDir: '.',
    roots: ['<rootDir>/src'],

    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,

    // Which files to include in the coverage. TypeScript under the src, but never node_modules.
    collectCoverageFrom: ['<rootDir>/src/**/*.(ts|tsx)', '!**/node_modules/**'],

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: 'v8',

    // Transforms files for use with es build
    transform: {
        '^.+\\.tsx?$': [
            'esbuild-jest',
            {
                sourcemap: true,
                loaders: {
                    '.spec.ts': 'tsx',
                },
            },
        ],
    },

    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    setupFiles: ['dotenv/config'],
    coverageReporters: ['json', 'html'],
};
