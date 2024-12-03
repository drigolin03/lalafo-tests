import { ListingPage } from '..listingPage/../../pages/listingPage';

describe('Lalafo - Создание объявлений', () => {
    const listingPage = new ListingPage();

    beforeEach(() => {
        // Подготовка: переход на страницу входа и авторизация
        cy.visit('/login');
        cy.get('#username').type('testUser'); // Введите свои данные
        cy.get('#password').type('testPassword'); // Введите свои данные
        cy.get('#loginButton').click();
        cy.url().should('include', '/dashboard');
    });

    it('Создание объявления с валидными данными', () => {
        listingPage.navigateTo();
        listingPage.uploadPhoto('cypress/fixtures/example.jpg'); // Убедитесь, что файл существует
        listingPage.enterTitle('Продаю велосипед');
        listingPage.enterDescription('Велосипед почти новый');
        listingPage.selectCategory('Транспорт');
        listingPage.setPrice('15000');
        listingPage.submitListing();

        // Проверка успешного создания
        cy.contains('Объявление успешно опубликовано').should('be.visible');
    });

    it('Проверка ошибок обязательных полей', () => {
        listingPage.navigateTo();
        listingPage.submitListing();

        // Проверка ошибок
        cy.contains('Поле "Название" обязательно').should('be.visible');
        cy.contains('Поле "Категория" обязательно').should('be.visible');
    });
});
