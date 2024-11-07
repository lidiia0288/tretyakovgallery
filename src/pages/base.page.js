import { allure } from 'allure-playwright';
export class BasePage {
    constructor(page) {
        this.page = page;
    }

    async open(url) {
        await allure.step(`Открыть главную страницу сайта ${url}`, async () => {
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    })
}
}