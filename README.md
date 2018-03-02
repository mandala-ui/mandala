![mandala](https://user-images.githubusercontent.com/1824267/35699021-a5ebb354-0743-11e8-9bf5-9a648a24c7d0.png)

# Mandala UI
[![CircleCI](https://circleci.com/gh/mandala-ui/mandala/tree/master.svg?style=svg)](https://circleci.com/gh/mandala-ui/mandala/tree/master) [![Coverage Status](https://coveralls.io/repos/github/mandala-ui/mandala/badge.svg)](https://coveralls.io/github/mandala-ui/mandala)

Mandala is a Declarative UI Component Library built with React and a small, Functional CSS library

## Getting Started

Check out the Interactive Docs before you decide if this package is right for you.

The only dependences are the Mandala CSS Utilities and React.

You can link the CDN version of the CSS utilities and start to prototype your own layouts and components separate from Mandala, and turn them into Mandala components later.

If you use the React Components, you will need your own build tools to import/require, like create-react-app

If you like you can install the Mandala UI Components as a whole with:

`yarn install mandala`

`import { ProgressBar } from 'mandala'`

But each of the components are published to NPM separately. If you'd just like to use a single component like the ProgressBar you can install the scoped packages.

e.g. `yarn install @mandala-ui/progress-bar`

---

__Benefits:__  

Most UI libraries require you to include their CSS anyway, with the downside of adding that bloat for just their components. Using a functional CSS library allows you to power the Mandala components, as well as your own components with the same syntax.

If something doesn't exist in the Mandala Library currently, compose it and submit it!

__Goals:__

- Help people build consistent yet customizable website and application UI
- Promote Composition over Inheritance at every level of the interface (CSS and JS)
- Reuse as much code and as many components as possible to reduce size and effort.
- Share component ideas and techniques with the community


##### Why Functional CSS?

So many reasons, but the simplest answer is that we believe it's a better choice to handle the complexity of CSS in the Template, rather than the CSS level. Even the best of CSS authors have the Fragile Base Class Problem, and that is amplified across teams of differing skill level.

##### Why don't you use a CSS-in-JS solution?

Not every project is a Javascript Single Page Application, and I am not convinced that it's a smart idea to require a build pipeline for every prototype, idea or product. Sharing the css utilities across projects and ideas promotes adoption of a component library.
