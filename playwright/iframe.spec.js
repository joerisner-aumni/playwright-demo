import { test, expect } from '@playwright/test';

test.describe('Iframe', () => {
  test('asserts heading text outside of iframes', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('externalMessage')).toHaveText('Testing iframes');
  });

  test('performs actions in same-origin iframe', async ({ page }) => {
    const iframe = page.frameLocator('[data-testid=sameOriginFrame]');

    await page.goto('/');
    await expect(iframe.getByTestId('iframeHeading')).toHaveText('Heading');
    await expect(iframe.getByAltText('Girl playing CTF')).toBeVisible();

    await iframe.getByPlaceholder('Search').fill('Lorem Ipsum');
    await iframe.getByTestId('dateInput').fill('1776-07-04');
    await iframe.getByTestId('submitBtn').click();

    page.on('dialog', () => {
      expect(dialog.message()).toEqual('hello from alert');
    });
  });

  test('performs actions in cross-origin iframe', async ({ page }) => {
    const iframe = page.frameLocator('[data-testid=crossOriginFrame]');
    const inputElement = iframe.getByPlaceholder('What needs to be done?');
    const todoList = iframe.locator('.todo-list');

    await page.goto('/');
    await expect(iframe.locator('header h1')).toHaveText('todos');
    await expect(todoList).not.toBeVisible();

    await inputElement.fill('Lorem Ipsum');
    await inputElement.press('Enter');
    await expect(todoList).toBeVisible();
  });
});
