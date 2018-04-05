## Mandala UI ListHeader Component
Mandala is a React component library that utilizes a declarative CSS library for styling.

### Installation
Check the [MonoRepo README](https://github.com/mandala-ui/mandala) for installation.

### Description
A header for the top of lists that matches the style and props

### Usage
if using the whole library:
```js
import { ListHeader } from 'mandala';
```
if only using this component:
```js
import ListHeader from '@mandala-ui/list-header';
```
### Props
* `children` - what needs to be in the header, usually one h element.
* `indented` - adds padding for a contained list
* `lineColor` - the color of the bottom border
* `lined` - set this prop to add a bottom border
* `lineWidth` - width of the bottom border of the header

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| children | node     | null         | -          |
| indented | boolean  | false        | -          |
| lineColor| string   | 'white'      | -          |
| lined    | boolean  | false        | -          |
| lineWidth| number   | 0            | -          |
| ordered  | boolean  | false        | -          |

#### TODO:
- [ ] tight, normal, high for vertical padding.
- [ ] infer `lined` from lineColor prop existence

![mandala-bottom](https://user-images.githubusercontent.com/1824267/38281372-32114e5c-375f-11e8-9fbe-e5191b96429c.png)
