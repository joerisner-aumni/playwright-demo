import { test, expect } from '@playwright/test';

test.describe('Iframe', () => {
  test('performs actions on elements embedded elements in an iframe', async ({ page }) => {
    const iframe = page.frameLocator('[data-testid=myIframe]');

    await page.goto('/');
    await expect(page.getByTestId('externalMessage')).toHaveText('Heading outside iframe');

    await expect(iframe.getByTestId('iframeHeading')).toHaveText('Heading inside iframe');
    await expect(iframe.getByAltText('Girl playing CTF')).toBeVisible();

    await iframe.getByPlaceholder('Search').fill('Lorem Ipsum');
    await iframe.getByTestId('dateInput').fill('1776-07-04');
    await iframe.getByTestId('submitBtn').click();

    page.on('dialog', () => {
      expect(dialog.message()).toEqual('hello from alert');
    });
  });
});
