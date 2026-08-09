# Node.js Course Repository Instructions

## Purpose

This is a learning repository for the Udemy [NodeJS Tutorial and Projects Course](https://www.udemy.com/course/nodejs-tutorial-and-projects-course). Help the learner understand and complete the exercises in Node.js, Express, MongoDB/Mongoose, REST APIs, JWT authentication, and the Jobster full-stack project.

## Learning workflow

- Before changing code, inspect `git status`, the relevant `package.json`, and the files involved in the current exercise.
- Infer the active lesson from the user's message and the current diff. If it is still ambiguous, state the module you are assuming.
- Treat `starter/` as the learner's working copy and `final/` as course reference material.
- Do not copy a whole implementation from `final/` into `starter/`. Compare with `final/` only when it helps diagnose a specific problem or the user explicitly asks.
- Default to teaching in small steps: explain the observed behavior and root cause, give the smallest useful hint or change, and explain why it works.
- If the user explicitly asks to implement or fix something, carry it through and verify it. Do not turn an implementation request into homework.
- Preserve the learner's uncommitted changes. Never discard or rewrite unrelated course work.
- Keep solutions aligned with the lesson's existing style and dependency versions. Do not modernize the whole project unless asked.

## Repository map

- `01-node-tutorial/`: Node fundamentals, modules, filesystem, events, and streams. This project uses ES modules.
- `02-express-tutorial/`: HTTP and Express basics, routes, middleware, controllers, and static content. This project uses ES modules.
- `03-task-manager/`: first MongoDB/Mongoose CRUD API.
- `04-store-api/`: product API with filtering, sorting, field selection, and pagination.
- `05-JWT-Basics/`: introductory JWT authentication flow.
- `06-jobs-api/`: authenticated Jobs API with routes, controllers, models, middleware, and API hardening.
- `06.5-jobster-api/`: Jobs API plus the Jobster React client and production static build.

Most project modules are independent applications with their own `package.json`, dependencies, and runtime directory. Later backend projects use CommonJS.

## Run and verify

- Run commands from the specific lesson directory, not from the repository root.
- Read that lesson's `package.json` before choosing a command. Most apps use `npm start`; Jobster also has `npm run dev`.
- There is no repository-wide test suite. Do not claim tests passed when a package only contains the placeholder `test` script.
- For a focused JavaScript edit, use `node --check <file>` when it is applicable. For behavior involving Express or MongoDB, describe any verification that still requires the server, environment variables, or database.
- The course projects target older Node/dependency versions in places (for example, Jobster declares Node 16). Avoid dependency upgrades as an incidental fix.
- The current Windows environment may have a broken global `npm` launcher. If `npm` fails before reading `package.json`, report the environment problem separately from application-code failures and use safe fallback checks where possible.

## Data and secrets

- Never print, commit, or replace values from `.env` files.
- Expected backend variables commonly include `MONGO_URI`, `JWT_SECRET`, and `JWT_LIFETIME`; confirm the relevant README or code before assuming them.
- Do not run destructive database population or deletion scripts unless the user explicitly asks.

## Communication

- Answer in Spanish unless the user requests another language.
- Keep framework terms and code identifiers in their conventional English form.
- When debugging, quote the exact error or point to the exact code path, then connect it to the Node/Express/Mongoose concept being learned.
- End code changes with a concise summary, verification performed, and a suggested English commit message. Do not commit unless asked.
