import { expect, Locator, Page } from '@playwright/test';


export class leadMatchNewClient {
    readonly page: Page;
    readonly addNewDealBtn: Locator;
    readonly openDealProductTypes: Locator;
    readonly chooseDealProductType: Locator;
    readonly dealAmount: Locator;
    readonly saveDealBtn: Locator;
    readonly saveMatchingBtn: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addNewDealBtn = page.locator('text=Dodaj potencjał');
        this.openDealProductTypes = page.locator('text=Typ produktu');
        this.chooseDealProductType = page.locator('div[role="option"]:has-text("Kredyt mieszkaniowy")');
        this.dealAmount = page.locator('input[name="amount"]');
        this.saveDealBtn = page.locator('(//button[contains(text(), "Zapisz")])[2]');
        this.saveMatchingBtn = page.locator('(//button[contains(text(), "Zapisz")])[1]');
    }

    async addNewDeal() {
        await this.addNewDealBtn.click()
    }
    
    async dealProductType(amount) {
        await this.openDealProductTypes.click()
        await this.chooseDealProductType.click()
        await this.dealAmount.fill(amount)
        await this.saveDealBtn.click()
        await this.saveDealBtn.click()
    }

    async saveMatching() {
        await this.saveMatchingBtn.click()
    }
}