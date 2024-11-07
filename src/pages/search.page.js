import { BasePage } from "./base.page";
import { allure } from 'allure-playwright';

export class SearchPage extends BasePage {
    constructor (page) {
        super(page);
        this.searchFrame = this.page.getByPlaceholder('Что вы ищете?');
        this.searchGet = this.page.locator('form').getByLabel('Поиск');
    }

    async goToFill (text) {
        await allure.step(`Ввести значение в поле поиска`, async () => {
        await this.searchFrame.click();
        await this.searchFrame.fill(text);
        await this.searchGet.click();
    })
    }
}