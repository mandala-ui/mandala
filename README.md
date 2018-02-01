# Mandala UI Component Library

Mandala is a Declarative Component Library built with React and Functional CSS

Most UI libraries require you to include their CSS anyway, with the downside of adding that bloat for just their components. Using a functional CSS library allows you to power the Mandala components, as well as your own components with the same syntax.

Hopefully the Mandala components kickstarts your React project and inspires your own components and layouts with the libraries

# Getting Started

Check out the Interactive Docs before you make a decision (good or bad).

The only dependences are the Mandala CSS library and React/DOM. If you use the React Components, you will need your own build tools to import/require.

If you like you can install the Mandala UI Components as a whole with:

`yarn install mandala`

But each of the components are published to NPM separately. If you'd just like to use a single component like the ProgressBar you can install the scoped packages.

---

##### Y U Functional CSS?

So many reasons, but the simplest answer is that I believe it's a better choice to handle the complexity in the Template, rather than the CSS. Even the best of CSS authors have the Fragile Base Class problem when it comes to CSS.

##### Y U no CSS in JS?

Not every project is a Javascript SPA, and I am not convinced that it's a smart idea to require a build pipeline for every prototype, idea or product.

You can link the CDN version of the CSS utilities and start to prototype your own layouts and components.
