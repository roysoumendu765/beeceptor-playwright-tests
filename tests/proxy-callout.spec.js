

import { test, expect } from '@playwright/test';

test.setTimeout(60000);

test('test', async ({ page }) => {
  // Go to the website
  await page.goto('https://beeceptor.com/');

  // Go to Login Page
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Email').fill('your_email_address'); // Add your username/email
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('your_password'); // Add your password
  await page.getByRole('button', { name: ' Sign In' }).click();

  // Create New Mock Server
  await page.getByPlaceholder('Project Name').click();
  await page.getByPlaceholder('Project Name').fill('yourprojectname'); // Add your new project name
  await page.getByRole('button', { name: ' Create Mock Server' }).click();
  await page.locator('.minimize-button > .fa').click();
  await page.getByText('Mocking Rules (2)').click();

  // Adding Synchronous Callouts
  await page.getByRole('button', { name: 'Additional Rule Types' }).click();
  await page.getByRole('link', { name: 'Create Proxy or Callout' }).click();
  await page.getByRole('textbox', { name: 'e.g: /api/path' }).click();
  await page.getByRole('textbox', { name: 'e.g: /api/path' }).fill('/newtodos'); // Add your routes
  await page.getByPlaceholder('https://your-webhook-endpoint').click();
  await page.getByPlaceholder('https://your-webhook-endpoint').fill('https://github.com/roysoumendu765'); // Your Address
  await page.locator('#proxyMinDelay').click();
  await page.locator('#proxyMinDelay').fill('1.00');
  await page.locator('#proxyMaxDelay').click();
  await page.locator('#proxyMaxDelay').fill('2.00');
  await page.getByLabel('Rule Description').click();
  await page.getByLabel('Rule Description').fill('Synchronous Test');
  await page.getByRole('button', { name: ' Save Proxy' }).click();

  // Adding Asynchronous Callouts
  await page.getByRole('button', { name: 'Additional Rule Types' }).click();
  await page.getByRole('link', { name: 'Create Proxy or Callout' }).click();
  await page.getByRole('textbox', { name: 'e.g: /api/path' }).click();
  await page.getByRole('textbox', { name: 'e.g: /api/path' }).fill('/n');
  await page.getByRole('textbox', { name: 'e.g: /api/path' }).click();
  await page.getByRole('textbox', { name: 'e.g: /api/path' }).fill('/newtodos');
  await page.getByLabel('Choose the response behavior').selectOption('no-wait');
  await page.getByPlaceholder('https://your-webhook-endpoint').click();
  await page.getByPlaceholder('https://your-webhook-endpoint').fill('https://github.com/roysoumendu765');
  await page.locator('#proxyMinDelay').click();
  await page.locator('#proxyMinDelay').fill('1.00');
  await page.locator('#proxyMaxDelay').click();
  await page.locator('#proxyMaxDelay').fill('2.00');
  await page.getByLabel('Rule Description').click();
  await page.getByLabel('Rule Description').fill('Asynchronous Test');
  await page.getByRole('button', { name: ' Save Proxy' }).click();

  // Close and Logout
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'user-avatarsoumend...' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});