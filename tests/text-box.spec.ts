import { expect, test } from '@playwright/test';
import { TextBoxPage } from '../pages/TextBoxPage';
import { validUser } from '../test-data/text-box';

test.describe('Text Box', () => {
  let textBoxPage: TextBoxPage;

  test.beforeEach(async ({ page }) => {
    textBoxPage = new TextBoxPage(page);
    await textBoxPage.open();
  });

  test('fills all fields and shows the submitted values', async () => {
    await textBoxPage.fillAndSubmit(validUser);

    await expect(textBoxPage.output).toBeVisible();
    await expect(textBoxPage.outputName).toContainText(validUser.fullName);
    await expect(textBoxPage.outputEmail).toContainText(validUser.email);
    await expect(textBoxPage.outputCurrentAddress).toContainText(validUser.currentAddress);
    await expect(textBoxPage.outputPermanentAddress).toContainText(validUser.permanentAddress);
  });
});
