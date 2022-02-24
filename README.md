# Webpack with GOV.UK Frontend

## This project demonstrates how to compile GOV.UK Frontend JavaScript using Webpack.

## To build webpack

npm run build

## To run

npx http-server

## ES6 imports for GOV.UK Frontend components

If importing individual components from a directory, use

import { Accordion } from 'govuk-frontend-fake';

If from individual file, use:

import Accordion from 'govuk-frontend-fake/govuk/components/accordion/accordion';

## Old instructions

Create /dist

Then run `./node_modules/webpack/bin/webpack.js ./src/js/main.js ./dist/bundle.js`

to tell Webpack to bundle the contents of src/js/main.js into dist/bundle.js

Note on ./node_modules/webpack/bin/webpack.js ./src/js/main.js ./dist/bundle.js

Might see:

One CLI for webpack must be installed. These are recommended choices, delivered as separate packages:

- webpack-cli (<https://github.com/webpack/webpack-cli>) The original webpack full-featured CLI. We will use "npm" to install the CLI via "npm install -D". Do you want to install 'webpack-cli' (yes/no):
