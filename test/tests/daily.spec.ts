import { test, expect } from "@playwright/test";
import { PepeTesterPage } from "../pageObject/pepeTest";

test("Create some events!", async ({ page }) => {
  const pepe = new PepeTesterPage(page);
  await pepe.openPage();
  await pepe.input.click();
  await pepe.input.type("Test input value");
  await pepe.next.click();
});
