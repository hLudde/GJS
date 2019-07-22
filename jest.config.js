require('dotenv').config();
{
    module.exports = {
        "verbose":true,
        "collectCoverage": true,
        "coverageReporters": ["text", "html"],
        "collectCoverageFrom":[
            "./src/*.js",
            "!./src/index.js",
            "!**/node_modules/**",
            "!**/vendor/**"
        ]
    }
}