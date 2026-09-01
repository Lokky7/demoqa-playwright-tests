import { expect, test } from '@playwright/test';
import { TextBoxPage } from '../pages/TextBoxPage';
import { userWithInvalidEmail } from '../test-data/text-box';

test.describe('Text Box (negative)', () => {
  test('rejects an invalid email', async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);
    await textBoxPage.open();

    await textBoxPage.fillAndSubmit(userWithInvalidEmail);

    await expect(textBoxPage.emailInput).toHaveClass(/field-error/);
    await expect(textBoxPage.output).toBeHidden();
  });
});
