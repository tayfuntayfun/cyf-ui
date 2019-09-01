## NPM Package

The `main` entrypoint in your `package.json` is used for Node.js, whereas most bundlers, e.g. webpack, look for the `module` entrypoint
which allows the users of your npm module to consume it through ES modules.
Most bundlers also don't transpile the `node_modules` of a project. This means that if a user installs our npm module and we don't transpile it,
their app will break as the browser doesn't understand JSX syntax for example.

This is the reason why we have a build step with babel, to transpile our code, before we publish our npm module.

## Linting and formatting

`eslint-plugin-import` is really useful for catching importing errors, i.e. files that you import that don't exist.

`husky` allows you to specify commands to run on a `pre-commit` hook. So we're currently running `lint-staged` on pre-commit, which allows us to lint our code through eslint and format it through prettier, ultimately preventing us from pushing bad, unformatted code.
