import { allure } from 'allure-playwright';
import { expect } from '@playwright/test';

export class BasePage {
    constructor(page) {
        this.page = page;
    }

    async open(url) {
        await allure.step(`Открыть главную страницу сайта ${url}`, async () => {
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    })
}

    async urlMethod(url) {
        await allure.step(`Проверить наличие значения «Пушкин» в запросе`, async () => {
            const currentUrl = this.page.url();
            await expect(currentUrl).toContain(encodeURI('Пушкин'));
        })
    }

    async urlMethodTwo(url) {
        await allure.step(`Проверить наличие значения «Италия» в ${url}`, async () => {
            const currentUrlTwo = this.page.url();
            await expect(currentUrlTwo).toContain(encodeURI('Италия'));
        })
    }
}