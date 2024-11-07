import { MainPage, SearchPage, ResultPage } from "./index";

export class App{
    constructor(page){
        this.page = page;
        this.mainPage = new MainPage(page);
        this.searchPage = new SearchPage(page);
        this.resultPage = new ResultPage(page);
    }
}