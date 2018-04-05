## Mandala UI Column Component
Mandala is a React component library that utilizes a declarative CSS library for styling.

### Installation

Check the [MonoRepo README](https://github.com/mandala-ui/mandala) for installation.
### Description
A Column is used for separating content from other content. Defaults to 100% width for you to layout how you prefer.
### Usage
if using the whole library:
```js
import { Column } from 'mandala';
```
if only using this component:
```js
import Column from '@mandala-ui/column';
```

### Props
* `backgroundColor` - background color string
* `borderColor` - border color string
* `borderRadius` - number clamped between 1 and 4
* `children` - Content inside the column
* `padding` - number clamped between 1 and 4, padding around all

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| backgroundColor| string     | white| -          |
| borderColor    | string     | white| -          |
| borderRadius   | number     | 0    | -          |
| children       | node       | null | -          |
| padding        | number     | 0    | -          |
| radius         | number     | 0    | -          |

#### TODO:
- [ ] Border Width

![mandala-bottom](https://user-images.githubusercontent.com/1824267/38281372-32114e5c-375f-11e8-9fbe-e5191b96429c.png)
