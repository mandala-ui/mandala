## Mandala UI ProgressBar Component
Mandala is a React component library that utilizes a declarative CSS library for styling.

### Installation
Check the [MonoRepo README](https://github.com/mandala-ui/mandala) for installation.

### Description
ProgressBar is a 100% width element that takes a percent prop and renders that much of it in another color.

### Usage
if using the whole library:
```js
import { ProgressBar } from 'mandala';
```
if only using this component:
```js
import ProgressBar from '@mandala-ui/progress-bar';
```
### Props
* `backgroundColor` - the color of the border around the dot
* `color` - the width of the border around the dot
* `large` - the color of the dot
* `percent` - the width of the inner section between the dot and border
* `pill` - the color of the inner section of the outlined dot

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| backgroundColor | string | null    | -          |
| color      | string | false        | -          |
| large      | boolean| 'white'      | -          |
| percent    | number | false        | -          |
| pill       | boolean| false        | -          |


#### TODO:
- [ ] prop to add/remove depth (shadow)
- [ ] borderColor adds a border of relevant color
- [ ] border width

![mandala-bottom](https://user-images.githubusercontent.com/1824267/38281372-32114e5c-375f-11e8-9fbe-e5191b96429c.png)
