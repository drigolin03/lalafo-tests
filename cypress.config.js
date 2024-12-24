const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://lalafo.kg', // Укажите базовый URL вашего тестируемого сайта
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        reportDir: 'reports', // Папка, где будут сохраняться отчеты
        overwrite: false,
        html: true,
        json: false,
    },
});
