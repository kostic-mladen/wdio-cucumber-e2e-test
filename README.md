**First Node Project - "Hello, World!"**

__STEPS__
1. ✅ Create folder (preferrably under `/Documents/workspace/<name-of-the-project>`)
   - Project name: `wdio-cucumber-e2e-test`
   - Description: `wdio e2e tests`
   - Keywords: `wdio, cucumber, e2e, tests`

2. ✅ Initialize node project

```sh
npm init [-y]
```

3. ✅ Check the presence of `package.json` file in the root
4. ✅ Run a simple `Hello, World!` program
5. ✅ Done! 🎉
---

## WebdriverIO Installation

__STEPS__
1. Install WebdriverIO

```sh
npm init wdio@latest .
```
2. Check the followings in respective files

📄**package.json**

```json
"type": "module"
```

📄**tsconfig.json**

```json
"module": "ESNext",
"resolveJsonModule": true,
"esModuleInterop": true,
"strict": false,

```

📄**wdio.conf.ts**

```ts
tsConfigPath: './tsconfig.json'
specs: [`${process.cwd()}/test/features/**/*.feature`]
require: ['./test/features/step-definitions/*.ts']

```
3. Done! 🎉

# Folder Structure Setup

Let's create the following folder structure

```sh
wdio-cucumber-e2e-test/
├── config/                     # Configuration files
├── data/                       # Test data files
│   ├── constants.json          # Common constants used in tests
├── debug/                      # Files for local reference only and used for general purpoase
├── logs/                       # Application and test logs
├── node_modules/               # NPM dependencies (auto-generated)
├── resources/                  # Resource documentation and guides
├── results/                    # Test execution results and reports
├── test/                       # Test suite directory
│   ├── features/               # BDD feature files
│       ├── step-definitions/   # Cucumber step definition files
│   ├── helper/                 # Test helper utilities
│   └── page-objects/           # Page Object Model files
├── .env.example                # Template for environment files
├── .env                        # Environment variables configuration
├── .gitignore                  # Git ignore rules
├── package-lock.json           # NPM dependency lock file
├── package.json                # NPM package configuration
├── README.md                   # Project documentation
├── tsconfig.json               # TypeScript configuration
└── wdio.conf.ts                # WebdriverIO main configuration file
```

🎯 The target project structure is now set up. Let's keep moving forward... 🚀

# Recommended VS Code Extensions

- vscode-icons - optional
- Cucumber (Gherkin) Full Support
- Prettier - Code formatter
- Path Intellisense
- npm Intellisense
- DotENV
- JavaScript (ES6) code snippets
- .gitignore Generator
- Markdown All in One
- TODO Highlight

---

Install these extensions from the VS Code Extensions Marketplace for a smoother and more productive workflow.

---
**First Feature File Creation**

**Test Steps**
1. Launch the web app: https://katalon-demo-cura.herokuapp.com/
2. Click on Make Appointment button
3. Verify the login page is displayed
---


**Feature file**

```yml
Feature: Feature name

    Feature Description
    This is the demo feature


    Scenario: Navigate to the login screen

        Given the user launches the CURA web app
        When the user clicks on Make Appointment button
        Then the login page should be displayed

```

**Step-def:**

```ts
import { Given, When, Then } from "@wdio/cucumber-framework";

/**
 * Selectors
 * Title:
 * CURA Healthcare Service
 *
 * Make Appointment
 * Link text:  Make Appointment
 *
 * Login page url
 * https://katalon-demo-cura.herokuapp.com/profile.php#login
 */

Given(/^the user launches the CURA web app$/, async function () {
  await browser.url("https://katalon-demo-cura.herokuapp.com/");
  await expect(browser).toHaveTitle("CURA Healthcare Service");
});

When(/^the user clicks on Make Appointment button$/, async function () {
  await $("=Make Appointment").click();
});

Then(/^the login page should be displayed$/, async function () {
  await expect(browser).toHaveUrl(/.*#login/);
});

```


**Reference**

📄**package.json**

```json
"type": "module"
```

📄**tsconfig.json**

```json
"module": "ESNext",
"resolveJsonModule": true,
"esModuleInterop": true,
"strict": false,

```

📄**wdio.conf.ts**

```ts
tsConfigPath: './tsconfig.json'
specs: [`${process.cwd()}/test/features/**/*.feature`]
require: ['./test/features/step-definitions/*.ts']

```

## Running Tests Using package.json Scripts
1. ✅ Run the test using `npx` command
2. ✅ Make use of `package.json` file's `scripts` section
3. ✅ Run a specific tag e.g. `@demo` using `--cucumberOpts.tags='@demo'`
4. Done ! 🎉

**Reference:**
1. WDIO Frameworks: https://webdriver.io/docs/frameworks/#cucumber-options 
---
