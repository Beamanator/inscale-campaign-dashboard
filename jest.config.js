module.exports = {
    setupFilesAfterEnv: ["./src/setupTests.js"],
    moduleFileExtensions: ["js"],
    collectCoverageFrom: ["src/*.js", "!src/index.js"],
    verbose: true,
};
