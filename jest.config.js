module.exports = {
    testMatch: ["./tests/unit/*.js"],
    setupFiles: ["./tests/setup.js"],
    moduleFileExtensions: ["js"],
    collectCoverageFrom: ["src/*.js", "!src/index.js"],
    verbose: true,
};
