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

  await app.basePage.urlMethod(); 

  await app.mainPage.open(url);
  await app.mainPage.goToSearch();
  await app.searchPage.goToFill(secondSearch);
  await app.resultPage.goToUrlSecond();

  await app.basePage.urlMethodTwo();
  });