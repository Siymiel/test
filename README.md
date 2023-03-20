# AIS-(RE)VISION

---

## Getting Started

Start the dev container using the vscode devcontainer extension

---

## Scripts

- **clean** - Runs lerna clean, helpful for setting up a fresh node_modules environment
- **bootstrap** - Runs lerna bootstrap, symlinks all workspaces together and runs npm install for each workspace
- **start:dev** - Automatically run when the dev container starts, starts each application workspace in development mode
- **ts:check** - Types checks all typescript by running `tsc --noEmit` on each typescript workspace
- **lint:check** - Runs eslint on each workspace _without_ attempting to autofix any error
- **lint:fix** - Runs eslint on each workspace while attempting to fix any errors automatically
- **lint:fix:specific** - Runs eslint on each workspace on the provided path and attempts to fix erros automatically, used for git precommit hook _ex `npm run lint:fix:specific .`_
- **format:check** - Runs prettier on each workspace _without_ autofixing
- **format:fix** - Runs prettier on each workspace while autofixing
- **format:fix:specific** - Runs prettier on specific path while auto fixing _ex `npm run format:fix:specific .`_
- **test:run** - Runs all workspace tests
- **test:watch** - Runs all workspace in watch mode
- **test:cypress** - Runs cypress smoke tests
- **prepare** - Installs husky hooks at npm install time, automatically run
- **hook:precommit** - Huskey precommit hook, runs lint/prettier fix and type checking
