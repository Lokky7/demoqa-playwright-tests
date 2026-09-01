import type { Locator, Page } from '@playwright/test';
import type { TextBoxFormData } from '../types/TextBoxFormData';
import { BasePage } from './BasePage';

export class TextBoxPage extends BasePage {
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly currentAddressInput: Locator;
  readonly permanentAddressInput: Locator;
  readonly submitButton: Locator;

  readonly output: Locator;
  readonly outputName: Locator;
  readonly outputEmail: Locator;
  readonly outputCurrentAddress: Locator;
  readonly outputPermanentAddress: Locator;

  constructor(page: Page) {
    super(page, '/text-box');

    // The output block is rendered inside #userForm and reuses two of the
    // input ids, so the fields are matched by tag as well.
    const form = page.locator('#userForm');
    this.fullNameInput = form.locator('input#userName');
    this.emailInput = form.locator('input#userEmail');
    this.currentAddressInput = form.locator('textarea#currentAddress');
    this.permanentAddressInput = form.locator('textarea#permanentAddress');
    this.submitButton = form.locator('#submit');

    this.output = page.locator('#output');
    this.outputName = this.output.locator('#name');
    this.outputEmail = this.output.locator('#email');
    this.outputCurrentAddress = this.output.locator('p#currentAddress');
    this.outputPermanentAddress = this.output.locator('p#permanentAddress');
  }

  async fillForm(data: TextBoxFormData): Promise<void> {
    await this.fullNameInput.fill(data.fullName);
    await this.emailInput.fill(data.email);
    await this.currentAddressInput.fill(data.currentAddress);
    await this.permanentAddressInput.fill(data.permanentAddress);
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }

  async fillAndSubmit(data: TextBoxFormData): Promise<void> {
    await this.fillForm(data);
    await this.submit();
  }
}
