# Mandala UI Button
Mandala is a React component library that utilizes a declarative CSS.

### Installation

Check the [Monorepo README](https://github.com/mandala-ui/mandala) for installation.

### Usage
if using the whole library:
```js
import { Button } from 'mandala';
```
if only using this component:
```js
import Button from '@mandala-ui/button';
```

### Props
* `children` - Whatever node you would like in your button. Use this to add icons or customize text color inside.
* `color` - color string for the background color of the button
* `disabled` - disables clicking and reduces the opacity by 60%
* `onClick` - click callback handler
* `pill` -  gives the button 100% radius
* `radius` - border radius, from 0-4, will not work if `pill` is `true`

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| children | node     | null         | -          |
| color    | string   | black        | -          |
| disabled | boolean  | false        | -          |
| onClick  | func     | null         | -          |
| pill     | boolean  | false        | -          |
| radius   | number   | 0            | -          |

![mandala-bottom](https://user-images.githubusercontent.com/1824267/38281372-32114e5c-375f-11e8-9fbe-e5191b96429c.png)
