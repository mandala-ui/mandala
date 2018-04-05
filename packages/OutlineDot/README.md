## Mandala UI OutlineDot Component
Mandala is a React component library that utilizes a declarative CSS library for styling.

### Installation
Check the [MonoRepo README](https://github.com/mandala-ui/mandala) for installation.

### Description
A header for the top of lists that matches the style and props

### Usage
if using the whole library:
```js
import { OutlineDot } from 'mandala';
```
if only using this component:
```js
import OutlineDot from '@mandala-ui/outline-dot';
```
### Props
* `borderColor` - the color of the border around the dot
* `borderWidth` - the width of the border around the dot
* `color` - the color of the dot
* `innerBorderWidth` - the width of the inner section between the dot and border
* `innerColor` - the color of the inner section of the outlined dot

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| borderColor | string| null         | -          |
| borderWidth | number| false        | -          |
| color       | string | 'white'     | -          |
| innerBorderWidth | number  | false | -          |
| innerColor  | string | 0           | -          |
| large       | boolean| false       | -          |

#### TODO:
- [ ] rename to Dot, use outline as a prop
- [ ] infer `lined` from lineColor prop existence

![mandala-bottom](https://user-images.githubusercontent.com/1824267/38281372-32114e5c-375f-11e8-9fbe-e5191b96429c.png)
