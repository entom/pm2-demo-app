module.exports = {
    apps: [{
        name: "app",
        script: "./app.js",
        env: {
            NODE_ENV: "development",
            PORT: 8081
        },
        env_production: {
            NODE_ENV: "production",
            PORT: 8081
        }
    }]
}