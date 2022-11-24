import { Locator, Page, expect } from "@playwright/test";
import { getByText } from "@testing-library/react";

export class PepeTesterPage {
  public page: Page;
  public input: Locator;
  public next: Locator;
  public prev: Locator;
  public revenueBtn: Locator;
  public customEventBtn: Locator;
  public throwErrorBtn: Locator;
  public customEventWithProps: Locator;
  public finalizeRevenue: Locator;
  public textToClickOn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.input = page.locator("input");
    this.next = page.locator("#next");
    this.prev = page.locator("#back");
    this.revenueBtn = page.locator("#revenue");
    this.customEventBtn = page.locator("#custom-event-btn");
    this.throwErrorBtn = page.locator("#throw-an-error-btn");
    this.customEventWithProps = page.locator("#custom-event-with-props-btn");
    this.finalizeRevenue = page.locator("#finalize-revenue");
    this.textToClickOn = page.getByText("Text to be clicked on!");
  }

  async openPage() {
    await this.page.goto("https://bigbadbananafiend.github.io/pepe-tester/");
  }

  async assertFirstStepUrl() {
    await expect(this.page).toHaveURL(
      "https://bigbadbananafiend.github.io/pepe-tester/"
    );
  }

  async assertSecondStepUrl() {
    await expect(this.page).toHaveURL(
      "https://bigbadbananafiend.github.io/pepe-tester/#/second-step"
    );
  }

  async assertFinalStepUrl() {
    await expect(this.page).toHaveURL(
      "https://bigbadbananafiend.github.io/pepe-tester/#/final-step"
    );
  }
}
