module.exports = {
    setupFilesAfterEnv: ["./src/setupTests.js"],
    moduleFileExtensions: ["js"],
    collectCoverageFrom: [
        "src/**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**",
    ],
    verbose: true,
};
