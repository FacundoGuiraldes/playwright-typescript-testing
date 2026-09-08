# 🎭 Playwright + TypeScript Testing Framework

Framework de testing automatizado construido con **Playwright** y **TypeScript**, con cobertura de **testing de APIs** y **testing E2E de interfaz**, integrado con **CI/CD**.

Proyecto de portfolio personal para especialización en **QA Automation**.

---

## 🛠️ Stack

| Herramienta | Uso |
|---|---|
| [Playwright](https://playwright.dev/) | Framework de automatización (API + E2E) |
| TypeScript | Lenguaje del proyecto |
| GitHub Actions | Ejecución automática de tests (CI/CD) |
| [API de wger](https://wger.de/en/software/api) | API pública contra la que corren los tests de API |

---

## 📁 Estructura del proyecto

```
tests/
├── api/          # Tests de testing de APIs (wger)
└── e2e/          # Tests end-to-end de interfaz (UI)

playwright.config.ts   # Configuración de Playwright
.github/workflows/     # Pipeline de CI/CD
```

---

## 🚀 Cómo correr el proyecto localmente

```bash
# Clonar el repo
git clone https://github.com/FacundoGuiraldes/playwright-typescript-testing.git
cd playwright-typescript-testing

# Instalar dependencias
npm install

# Instalar navegadores de Playwright
npx playwright install

# Correr todos los tests
npx playwright test

# Correr en modo UI (interfaz visual, útil para debugging)
npx playwright test --ui

# Ver el último reporte de resultados
npx playwright show-report
```

---

## ✅ Qué cubren los tests

**API Testing** (`tests/api`)
- Casos positivos y negativos sobre endpoints de la API de wger
- Validación de status codes, shape de respuesta y datos esperados

**E2E Testing** (`tests/e2e`)
- *(en progreso)*

---

## 🗺️ Roadmap

- [x] Setup inicial del proyecto con Playwright + TypeScript
- [ ] Tests de API contra la API pública de wger
- [ ] Tests E2E de interfaz con Page Object Model
- [ ] CI/CD con GitHub Actions (ejecución automática en cada push/PR)
- [ ] Reportes visuales (Allure / HTML Reporter)

---

## 👤 Autor

**Facundo Guiraldes**
Estudiante de Tecnicatura en Programación (UCES) | En camino a QA Automation
[GitHub](https://github.com/FacundoGuiraldes)