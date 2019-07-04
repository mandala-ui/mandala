![mandala](https://user-images.githubusercontent.com/1824267/35699021-a5ebb354-0743-11e8-9bf5-9a648a24c7d0.png)
# Mandala UI
[![Maintainability](https://api.codeclimate.com/v1/badges/9d2dd2ee7a82ff8cf248/maintainability)](https://codeclimate.com/github/mandala-ui/mandala/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/9d2dd2ee7a82ff8cf248/test_coverage)](https://codeclimate.com/github/mandala-ui/mandala/test_coverage) [![CircleCI](https://circleci.com/gh/mandala-ui/mandala/tree/master.svg?style=shield)](https://circleci.com/gh/mandala-ui/mandala/tree/master)

Mandala is a UI Component Library built with [React](http://reactjs.org) and [Tachyons](http://tachyons.io), a tiny _(30kb GZIP)_ Declarative CSS library
## Installation
Check out our [Interactive Docs](https://mandala-ui.github.io/mandala/interactive/index.html) before you decide if this package is right for you.

The only real dependencies to use Mandala are React, and Tachyons.io and they are Peer Dependencies, so you are responsible for installing them in your build

You can add the CDN version of tachyons to the head of your project to easily get started.

`<link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"/>`

If you have a CSS build pipeline in your React project, you can also

`npm install tachyons`

##### Components
Each of the Mandala components are [published to NPM separately](https://www.npmjs.com/settings/mandala-ui/packages) as scoped packages.

`npm install @mandala-ui/progress-bar`

then import the component

```js
import ProgressBar from '@mandala-ui/progress-bar'
```

_Either way you will need Tachyons installed_

## Contributing

Mandala is set up to easily get you contributing new components.

It uses [React Storybook](https://storybook.js.org) as a development environment.

So to get started, run:

```
npm run generate
```
And follow the prompts. This will scaffold a new component and generate the Jest test files, as well as a Storybook Story for interactive documentation.

Storybook stories use mostly these two addons for development.

- [Knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs)
- [Actions](https://github.com/storybooks/storybook/tree/master/addons/actions)

```
npm start
```
Go to `http://localhost:6006/`

and find your component which will render empty, now you can start composing CSS classes.

A PR of a new Component requires 3 things:
- A README that completely documents the props and their usage
- Interactive documentation in the form of a Storybook Story
- 100% Jest Test Coverage.

![mandala-bottom](https://user-images.githubusercontent.com/1824267/38281372-32114e5c-375f-11e8-9fbe-e5191b96429c.png)
