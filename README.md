# React Boilerplate

![Build](https://github.com/chuntley/react-boilerplate/workflows/Build/badge.svg)

## Installation

Requires Node 22.x, 24.x, 25.x, or 26.x

Install pnpm (via Corepack, bundled with Node): https://pnpm.io/installation

```bash
$ corepack enable pnpm
```

Clone and install dependencies:

```bash
$ git clone git@github.com:chuntley/react-boilerplate.git
$ cd react-boilerplate
$ pnpm install
```

## Development

To lift the dev server with hot module reloading.

```bash
$ pnpm dev
```

The output of the command will list the URL to the dev server.

## Build

To bundle the React application

```bash
$ pnpm dist
```

## Testing

```bash
# run all tests including coverage report
$ pnpm test

# run tests in watch mode
$ pnpm test:watch

# run single test without coverage or linting
$ pnpm test:lite
```

## Linting

```bash
$ pnpm lint
```

## Formatting

```bash
$ pnpm format
```
