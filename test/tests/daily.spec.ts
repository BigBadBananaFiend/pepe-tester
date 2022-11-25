import { test, expect, chromium } from "@playwright/test";
import { PepeTesterPage } from "../pageObject/dailyTest.pageObject";

test("Create some events!", async ({ page }) => {
  const pepe = new PepeTesterPage(page);
  await pepe.openPage();
  await pepe.assertFirstStepUrl();
  await pepe.revenueBtn.click();
  await pepe.input.click();
  await pepe.input.type("Test input value");
  await pepe.customEventBtn.click();
  await pepe.throwErrorBtn.click();
  await pepe.next.click();
  await pepe.assertSecondStepUrl();
  await pepe.revenueBtn.click();
  await pepe.textToClickOn.click();
  await pepe.customEventWithProps.click();
  await pepe.next.click();
  await pepe.assertFinalStepUrl();
  await pepe.revenueBtn.click();
  await pepe.finalizeRevenue.click();
});
