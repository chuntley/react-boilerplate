React Boilerplate
========

Installation
---

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
To lift webpack-serve (default port 8090) with hot module reloading.
```bash
$ yarn dev
```
The application can be reached at http://localhost:8090

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
