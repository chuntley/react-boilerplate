React Boilerplate
========

![Build](https://github.com/chuntley/react-boilerplate/workflows/Build/badge.svg)

Installation
---

Requires Node >=18.x, excluding 19.x

Clone and install NPM dependencies:

```bash
$ git clone git@github.com:chuntley/react-boilerplate.git
$ cd react-boilerplate
$ npm install
```

Development
---
To lift the dev server with hot module reloading.
```bash
$ npm run dev
```
The output of the command will list the URL to the dev server.

Build
---

To bundle the React application
```bash
$ npm run dist
```

Testing
---

```bash
# run all tests including coverage report and linting
$ npm run test

# run tests in watch mode
$ npm run test:watch

# run single test without coverage or linting
$ npm run test:lite
```

Linting
---
```bash
$ npm run lint
```
