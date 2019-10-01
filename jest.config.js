module.exports = {
    setupFilesAfterEnv: ["./src/setupTests.js"],
    moduleFileExtensions: ["js"],
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**",
    ],
    verbose: true,
};
