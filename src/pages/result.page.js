import { BasePage } from "./base.page";
import { allure } from 'allure-playwright';

export class ResultPage extends BasePage {
    constructor(page) {
        super(page); 
        this.page = page;
    }

    async goToUrlFirst(text) {
        await allure.step(`Проверить наличие первого параметра поиска в URL`, async () => {
            await this.page.waitForURL(/.*\?query=%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD.*/);
        });
    }

    async goToUrlSecond(text) {
        await allure.step(`Проверить наличие второго параметра поиска в URL`, async () => {
            await this.page.waitForURL(/.*\?query=%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F.*/);
        });
    }
}