import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero content from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Form & Function/)
    // Hero content from the homepage node
    await expect(page.locator('body')).toContainText('Form & Function')
  })

  test('displays stats section', async ({ page }) => {
    await page.goto('/')
    // Stats from the imported homepage paragraph items
    await expect(page.locator('body')).toContainText('Projects')
  })

  test('has navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('a[href="/work"]').first()).toBeVisible()
    await expect(page.locator('a[href="/services"]').first()).toBeVisible()
    await expect(page.locator('a[href="/team"]').first()).toBeVisible()
  })
})

test.describe('Work / Projects page', () => {
  test('lists projects from Drupal', async ({ page }) => {
    await page.goto('/work')
    await expect(page.locator('h1')).toContainText('Projects')
    // Imported project titles
    await expect(page.locator('body')).toContainText('Solace Wellness')
    await expect(page.locator('body')).toContainText('Atlas Fintech')
    await expect(page.locator('body')).toContainText('TerraVerde')
  })

  test('project detail page loads via slug', async ({ page }) => {
    await page.goto('/work/solace-wellness-rebrand')
    await expect(page.locator('body')).toContainText('Solace')
  })
})

test.describe('Services page', () => {
  test('lists services from Drupal', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('h1')).toContainText('Services')
    await expect(page.locator('body')).toContainText('Brand Identity')
    await expect(page.locator('body')).toContainText('Digital Design')
    await expect(page.locator('body')).toContainText('Packaging')
  })

  test('service detail page loads via slug', async ({ page }) => {
    await page.goto('/services/brand-identity')
    await expect(page.locator('body')).toContainText('Brand Identity')
  })
})

test.describe('Team page', () => {
  test('lists team members from Drupal', async ({ page }) => {
    await page.goto('/team')
    await expect(page.locator('h1')).toContainText('Team')
    await expect(page.locator('body')).toContainText('Nina Rodriguez')
    await expect(page.locator('body')).toContainText('Alex Chen')
    await expect(page.locator('body')).toContainText('Maya Okafor')
  })

  test('team member detail page loads via slug', async ({ page }) => {
    await page.goto('/team/nina-rodriguez')
    await expect(page.locator('body')).toContainText('Nina')
  })
})

test.describe('Static pages', () => {
  test('about page renders', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('body')).toContainText('Form & Function')
  })

  test('contact page renders', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('body')).toContainText('Contact')
  })
})
