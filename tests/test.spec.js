import { test, expect } from '@playwright/test';
import { App } from '../src/pages';

const url = 'https://www.tretyakovgallery.ru/?lang=ru';
let firstSearch = "Пушкин";
let secondSearch = "Италия";


test("Search", async ({ page }) => {
  let app = new App(page);
  
  await app.mainPage.open(url);
  await app.mainPage.goToSearch();
  await app.searchPage.goToFill(firstSearch);
  await app.resultPage.goToUrlFirst();

  const currentUrl = page.url();
  await expect(currentUrl).toContain('?query=%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD'); //todo вынести экспекты на отдельную страницу 

  await app.mainPage.open(url);
  await app.mainPage.goToSearch();
  await app.searchPage.goToFill(secondSearch);
  await app.resultPage.goToUrlSecond();

    const currentUrlTwo = page.url();
    await expect(currentUrlTwo).toContain('?query=%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F'); //todo вынести экспекты на отдельную страницу 
  });