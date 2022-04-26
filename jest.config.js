/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    testEnvironment: "jsdom",
    clearMocks: true,
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/src/__mocks__/fileMock.ts",
        "\\.(s?css|less)$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    roots: ["<rootDir>"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    transform: {
        "^.+\\.tsx?$": "babel-jest",
    },
    setupFiles: ["<rootDir>/src/__mocks__/testSetup.ts"],
};
