import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckBoxPage extends BasePage {
  readonly tree: Locator;
  readonly result: Locator;
  readonly selectedResultItems: Locator;

  readonly allNodeCheckboxes: Locator;
  readonly checkedNodeCheckboxes: Locator;
  readonly indeterminateNodeCheckboxes: Locator;

  constructor(page: Page) {
    super(page, '/checkbox');

    this.tree = page.locator('.rc-tree');
    this.result = page.locator('.display-result');
    this.selectedResultItems = this.result.locator('.text-success');

    this.allNodeCheckboxes = this.tree.locator('.rc-tree-checkbox');
    this.checkedNodeCheckboxes = this.tree.locator('.rc-tree-checkbox-checked');
    this.indeterminateNodeCheckboxes = this.tree.locator('.rc-tree-checkbox-indeterminate');
  }

  nodeCheckbox(title: string): Locator {
    return this.page.getByRole('checkbox', { name: `Select ${title}` });
  }

  async toggleNode(title: string): Promise<void> {
    await this.nodeCheckbox(title).click();
  }

  // There is no "expand all" button and collapsed branches are not rendered,
  // so the tree has to be opened level by level.
  async expandAll(): Promise<void> {
    for (let pass = 0; pass < 10; pass++) {
      const collapsed = this.tree.locator('.rc-tree-switcher_close');
      const count = await collapsed.count();
      if (count === 0) return;

      // Bottom-up, because expanding a node only inserts rows below it.
      for (let i = count - 1; i >= 0; i--) {
        await collapsed.nth(i).click();
      }
    }

    throw new Error('Tree still has collapsed branches after 10 passes');
  }

  async selectedKeys(): Promise<string[]> {
    return this.selectedResultItems.allInnerTexts();
  }
}
