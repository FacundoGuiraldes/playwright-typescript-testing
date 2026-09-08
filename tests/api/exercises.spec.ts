// tests/api/exercises.spec.ts
import { test, expect } from '@playwright/test';

const BASE_URL = 'https://wger.de/api/v2';

test.describe('Exercise Categories API', () => {

  test('GET /exercisecategory devuelve un status 200', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/exercisecategory/`);
    expect(response.status()).toBe(200);
  });

  test('GET /exercisecategory devuelve una lista de categorías con la forma esperada', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/exercisecategory/`);
    const body = await response.json();

    expect(Array.isArray(body.results)).toBeTruthy();
    expect(body.results.length).toBeGreaterThan(0);

    const firstCategory = body.results[0];
    expect(firstCategory).toHaveProperty('id');
    expect(firstCategory).toHaveProperty('name');
  });

});

test.describe('Equipment API', () => {

  test('GET /equipment devuelve un status 200', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/equipment/`);
    expect(response.status()).toBe(200);
  });

  test('GET /equipment/1 devuelve un equipo específico válido', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/equipment/1/`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty('id', 1);
    expect(body).toHaveProperty('name');
  });

  test('GET /equipment/9999 devuelve 404 si el ID no existe', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/equipment/9999/`);
    expect(response.status()).toBe(404);
  });

});

test.describe('Muscle API', () => {

  test('GET /muscle devuelve una lista de músculos', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/muscle/`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body.results)).toBeTruthy();
  });

});