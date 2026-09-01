import { expect, test } from '@playwright/test';
import { CheckBoxPage } from '../pages/CheckBoxPage';
import { ALL_NODE_TITLES, ALL_SELECTED_KEYS, CHILD_NODE_TITLES } from '../test-data/check-box';

test.describe('Check Box', () => {
  let checkBoxPage: CheckBoxPage;

  test.beforeEach(async ({ page }) => {
    checkBoxPage = new CheckBoxPage(page);
    await checkBoxPage.open();
    await checkBoxPage.expandAll();
  });

  test('selecting Home marks all child items', async () => {
    await expect(checkBoxPage.allNodeCheckboxes).toHaveCount(ALL_NODE_TITLES.length);
    await expect(checkBoxPage.checkedNodeCheckboxes).toHaveCount(0);

    await checkBoxPage.toggleNode('Home');

    for (const title of CHILD_NODE_TITLES) {
      await expect(checkBoxPage.nodeCheckbox(title), `"${title}" should be checked`).toBeChecked();
    }
    await expect(checkBoxPage.checkedNodeCheckboxes).toHaveCount(ALL_NODE_TITLES.length);
    await expect(checkBoxPage.indeterminateNodeCheckboxes).toHaveCount(0);

    await expect
      .poll(async () => (await checkBoxPage.selectedKeys()).sort())
      .toEqual([...ALL_SELECTED_KEYS].sort());
  });

  test('unselecting Home clears all child items', async () => {
    await checkBoxPage.toggleNode('Home');
    await expect(checkBoxPage.checkedNodeCheckboxes).toHaveCount(ALL_NODE_TITLES.length);

    await checkBoxPage.toggleNode('Home');

    await expect(checkBoxPage.checkedNodeCheckboxes).toHaveCount(0);
    await expect(checkBoxPage.selectedResultItems).toHaveCount(0);
  });
});
