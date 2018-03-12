![mandala](https://user-images.githubusercontent.com/1824267/35699021-a5ebb354-0743-11e8-9bf5-9a648a24c7d0.png)

# Mandala UI
[![CircleCI](https://circleci.com/gh/mandala-ui/mandala/tree/master.svg?style=svg)](https://circleci.com/gh/mandala-ui/mandala/tree/master) [![Coverage Status](https://coveralls.io/repos/github/mandala-ui/mandala/badge.svg?branch=master&service=github)](https://coveralls.io/github/mandala-ui/mandala)

Mandala is a Declarative UI Component Library built with React and a small, Functional CSS library (Tachyons.io)

## Getting Started

Check out the [Interactive Docs](https://mandala-ui.github.io/mandala/interactive/index.html) before you decide if this package is right for you.

The only real dependencies to use Mandala are React, and Tachyons.io

You can add the CDN version of tachyons to the head of your project to easily get started.

`<link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"/>`

If you have a CSS build pipeline in your React project, you can also

`yarn install tachyons`


If you like you can install the Mandala UI Components as a whole with:

`yarn install mandala`

And then import the relevant ones with

`import { ProgressBar } from 'mandala'`

Each of the mandala components are published to NPM separately. If you'd just like to use a single component like the ProgressBar you can install the scoped packages.

e.g. `yarn install @mandala-ui/progress-bar`

Both ways still require the CSS utilities to be installed
