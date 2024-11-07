import {BasePage} from './base.page';
import { allure } from 'allure-playwright';

export class MainPage extends BasePage {
constructor (page) {
    super(page);
    this.searchButton = this.page.getByLabel('Поиск');
}

async goToSearch () {
    await allure.step(`Нажать иконку поиска в верхней панели`, async () => {
    await this.searchButton.click();
})

}
}