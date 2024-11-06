import { test, expect } from '@playwright/test';
import { App } from '../src/pages';
import { allure } from 'allure-playwright';

const url = 'https://www.tretyakovgallery.ru/?lang=ru';
let firstSearch = "Пушкин";
let secondSearch = "Италия";


test("Search", async ({ page }) => {
  let app = new App(page);
  
  await allure.step('Открыть главную страницу сайта', async () => {
    await app.mainPage.open(url);
  });

  await allure.step('Нажать иконку поиска в верхней панели', async () => {
    await app.mainPage.goToSearch();
  });

  await allure.step(`Ввести первое значение "${firstSearch}" в поле поиска`, async () => {
    await app.searchPage.goToFill(firstSearch);
  });

  await allure.step('Проверить наличие параметра поиска в URL', async () => {
  await page.waitForURL(/.*\?query=%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD.*/); //плейрайт быстрее сайта, если не ждать урл, то тесты падают
    
  const currentUrl = page.url();
  await expect(currentUrl).toContain('?query=%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD'); //todo вынести экспекты на отдельную страницу 
  });

  await allure.step('Открыть снова главную страницу сайта', async () => {
    await app.mainPage.open(url);
  });

  await allure.step('Нажать иконку поиска в верхней панели', async () => {
    await app.mainPage.goToSearch();
  });

  await allure.step(`Ввести второе значение "${secondSearch}" в поле поиска`, async () => {
    await app.searchPage.goToFill(secondSearch);
  });

  await allure.step('Проверить наличие нового параметра поиска в URL', async () => {
    await page.waitForURL(/.*\?query=%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F.*/, { timeout: 60000 });

    const currentUrlTwo = page.url();
    await expect(currentUrlTwo).toContain('?query=%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F'); //todo вынести экспекты на отдельную страницу 
  });
});