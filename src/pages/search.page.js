import { BasePage } from "./base.page";
import { allure } from 'allure-playwright';

export class SearchPage extends BasePage {

    constructor (page) {
        super(page);
        this.searchFrame = this.page.getByPlaceholder('Что вы ищете?');
        this.searchGet = this.page.locator('form').getByLabel('Поиск');
        this.searchResult = this.page.locator('.search__results > div > div:nth-child(3)');
    }

    async goToFill (text) {
        await allure.step(`Ввести значение в поле поиска`, async () => {
        await this.searchFrame.click();
        await this.searchFrame.fill(text);
        await this.searchGet.click();  
    })
    }

    async goToResult() {
        await allure.step(`Получить страницу с результатами поиска`, async () => {
        await this.searchResult.click();
    })
    }

    async urlMethod() {
        return this.page.url();
    }
}

