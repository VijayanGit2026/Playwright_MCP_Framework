

\# Playwright MCP Framework



A JavaScript ES-module Playwright automation framework combining SauceDemo Page Object Model, reusable fixtures, hooks, cross-browser testing, reporting and Playwright MCP integration.



\## Project Features



\- Page Object Model (POM)

\- Reusable Playwright fixtures

\- Test lifecycle hooks

\- SauceDemo login and checkout automation

\- PDF download verification

\- Chromium, Firefox and WebKit support

\- HTML reporting

\- Allure reporting

\- Playwright MCP integration



\## Prerequisites



\- Node.js 20.10 or newer

\- npm

\- Visual Studio Code

\- Zoo Code extension (for MCP integration)



\## Installation



Install project dependencies:



```bash

npm install

```



Install Playwright browsers:



```bash

npx playwright install chromium firefox webkit

```



\## Environment Configuration



The default application URL is:



```text

https://www.saucedemo.com

```



For a custom environment, copy `.env.example` to `.env` and update:



```dotenv

BASE\_URL=https://www.saucedemo.com

```



\## Running Tests



Run all browser projects:



```bash

npm test

```



Run individual browsers:



```bash

npm run test:chromium

npm run test:firefox

npm run test:webkit

```



Run Chromium in headed mode:



```bash

npm run test:headed

```



List discovered tests:



```bash

npm run test:list

```



\## Reports



Open the Playwright HTML report:



```bash

npm run report

```



Generate the Allure report:



```bash

npm run allure:generate

```



Open the Allure report:



```bash

npm run allure:open

```



\## MCP Configuration



The root `.mcp.json` file configures:



\- Playwright browser MCP server

\- Playwright test MCP server



Open this project folder as the VS Code workspace.



Install dependencies before starting the MCP servers so the local Playwright executable is available.



\## Project Structure



```text

Playwright\_MCP\_Framework/

├── .env.example

├── .gitignore

├── .mcp.json

├── README.md

├── package.json

├── playwright.config.js

├── config/

├── fixtures/

├── Hooks/

├── pages/

├── testData/

├── tests/

└── utils/

```



\## Important Notes



\- Do not commit `.env`, passwords or private tokens.

\- Do not commit `node\_modules` or generated reports.

\- Original source projects are kept separate.

\- Test results and downloaded PDFs are stored in Playwright output folders.



