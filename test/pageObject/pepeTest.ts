import { expect, Locator, Page } from "@playwright/test";

export class PepeTesterPage {
  public page: Page;
  public input: Locator;
  public next: Locator;
  public prev: Locator;

  constructor(page: Page) {
    this.page = page;
    this.input = page.locator("input");
    this.next = page.locator("#next");
    this.prev = page.locator("#back");
  }

  async openPage() {
    await this.page.goto("https://bigbadbananafiend.github.io/pepe-tester/");
  }
}
