export class ListingPage {
    navigateTo() {
        cy.visit('/new-listing'); // URL для страницы создания объявления
    }

    uploadPhoto(filePath: string) {
        cy.get('input[type="file"]').attachFile(filePath); // Загрузка файла
    }

    enterTitle(title: string) {
        cy.get('#title').type(title); // Ввод заголовка
    }

    enterDescription(description: string) {
        cy.get('#description').type(description); // Ввод описания
    }

    selectCategory(category: string) {
        cy.get('#categoryDropdown').select(category); // Выбор категории
    }

    setPrice(price: string) {
        cy.get('#price').type(price); // Установка цены
    }

    submitListing() {
        cy.get('button[type="submit"]').click(); // Отправка формы
    }
}
