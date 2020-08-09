module.exports = {
    apps: [{
        name: "app01",
        script: "./app.js",
        env: {
            NODE_ENV: "development",
            PORT: 8081
        },
        env_production: {
            NODE_ENV: "production",
            PORT: 8081
        }
    }, {
        name: "app02",
        script: "./app.js",
        env: {
            NODE_ENV: "development",
            PORT: 8082
        },
        env_production: {
            NODE_ENV: "production",
            PORT: 8082
        }
    }]
}