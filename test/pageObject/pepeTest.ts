import { Locator, Page } from "@playwright/test";

export class PepeTesterPage {
  public page: Page;
  public input: Locator;
  public next: Locator;
  public prev: Locator;
  public customEventBtn: Locator;
  public throwErrorBtn: Locator;
  public customEventWithProps: Locator;
  public finalizeRevenue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.input = page.locator("input");
    this.next = page.locator("#next");
    this.prev = page.locator("#back");
    this.customEventBtn = page.locator("#custom-event-btn");
    this.throwErrorBtn = page.locator("#throw-an-error-btn");
    this.customEventWithProps = page.locator("custom-event-with-props-btn");
    this.finalizeRevenue = page.locator("finalize-revenue");
  }

  async openPage() {
    await this.page.goto("https://bigbadbananafiend.github.io/pepe-tester/");
  }
}
