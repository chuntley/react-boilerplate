React Boilerplate
========

![Build](https://github.com/chuntley/react-boilerplate/workflows/Build/badge.svg)

Installation
---

Requires Node >=18.x, excluding 19.x

Install Yarn:

```bash
https://yarnpkg.com/lang/en/docs/install/
```

Clone and install Yarn dependencies:

```bash
$ git clone git@github.com:chuntley/react-boilerplate.git
$ cd react-boilerplate
$ yarn
```

Development
---
To lift the dev server with hot module reloading.
```bash
$ yarn dev
```
The output of the command will list the URL to the dev server.

Build
---

To bundle the React application
```bash
$ yarn dist
```

Testing
---

```bash
# run all tests including coverage report and linting
$ yarn test

# run tests in watch mode
$ yarn test:watch

# run single test without coverage or linting
$ yarn test:lite
```

Linting
---
```bash
$ yarn lint
```
