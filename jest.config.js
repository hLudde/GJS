require('dotenv').config();
{
    module.exports = {
        "verbose":true,
        "collectCoverage": true,
        "coverageReporters": ["text"],
        "collectCoverageFrom":[
            "./src/*.js",
            "!**/node_modules/**",
            "!**/vendor/**"
        ]
    }
}