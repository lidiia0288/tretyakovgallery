import {BasePage} from './base.page';

export class MainPage extends BasePage {
constructor (page) {
    super(page);
    this.searchButton = this.page.getByLabel('Поиск');
}

async goToSearch () {
    await this.searchButton.click();
}


}