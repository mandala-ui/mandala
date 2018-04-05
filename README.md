![mandala](https://user-images.githubusercontent.com/1824267/35699021-a5ebb354-0743-11e8-9bf5-9a648a24c7d0.png)

# Mandala UI
[![CircleCI](https://circleci.com/gh/mandala-ui/mandala/tree/master.svg?style=shield)](https://circleci.com/gh/mandala-ui/mandala/tree/master) [![Coverage Status](https://coveralls.io/repos/github/mandala-ui/mandala/badge.svg?branch=master&service=github)](https://coveralls.io/github/mandala-ui/mandala) [![bitHound Overall Score](https://www.bithound.io/github/mandala-ui/mandala/badges/score.svg)](https://www.bithound.io/github/mandala-ui/mandala) [![bitHound Dependencies](https://www.bithound.io/github/mandala-ui/mandala/badges/dependencies.svg)](https://www.bithound.io/github/mandala-ui/mandala/master/dependencies/npm) [![DeepScan grade](https://deepscan.io/api/projects/2162/branches/11294/badge/grade.svg)](https://deepscan.io/dashboard#view=project&pid=2162&bid=11294)

Mandala is a Declarative UI Component Library built with React and a small, Functional CSS library (Tachyons.io)

## Installation

Check out the [Interactive Docs](https://mandala-ui.github.io/mandala/interactive/index.html) before you decide if this package is right for you.

The only real dependencies to use Mandala are React, and Tachyons.io

You can add the CDN version of tachyons to the head of your project to easily get started.

`<link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"/>`

If you have a CSS build pipeline in your React project, you can also

`yarn install tachyons`

##### Components
If you like you can install the Mandala UI Components as a whole with:

`yarn install mandala`

And then import the relevant ones with

`import { ProgressBar } from 'mandala'`

Each of the mandala components are [published to NPM separately](https://www.npmjs.com/settings/mandala-ui/packages). If you'd just like to use a single component like the ProgressBar you can install the scoped packages.

e.g. `yarn install @mandala-ui/progress-bar`

Both ways still require the Tachyons CSS to be installed

## Contributing

Mandala is set up to easily get you contributing new components.

It uses [React Storybook](https://storybook.js.org) as a development environment.

So to get started, run:

```
yarn run generate
```
And follow the prompts. This will scaffold a new component and generate the test files, which will pass (is defined and renders default).

Inside `stories/index.js`, import the development version of the package and set up a story.

```
yarn start
```
Go to `http://localhost:6006/`

and find your component which will render empty, now you can start composing CSS classes.

To submit a PR your PR will need 3 things:
- A README that completely documents the props and their intended usage
- Interactive documentation in the form of a React Storybook Story
- 100% Test Coverage

![mandala-bottom](https://user-images.githubusercontent.com/1824267/38281372-32114e5c-375f-11e8-9fbe-e5191b96429c.png)
