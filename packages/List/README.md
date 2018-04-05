## Mandala UI List Component
Mandala is a React component library that utilizes a declarative CSS library for styling.

### Installation
Check the [MonoRepo README](https://github.com/mandala-ui/mandala) for installation.

### Description
A List is used for content in order or in sequence. The props on this list allow you to create robust compound components. It renders all the children inside a <ListItem /> component.

### Usage
if using the whole library:
```js
import { List } from 'mandala';
```
if only using this component:
```js
import List from '@mandala-ui/list';
```
### Props
* `children` - items that will be in the list, they must be elements
* `contained` - will remove the last bottom border if the list is contained inside another element
* `indented` - adds padding for a contained list
* `lineColor` - the color of the bottom border of each ListItem
* `lined` - set this prop to add lines
* `lineWidth` - width of lines, clamped 1-5.
* `ordered` - add a number to the front of each ListItem

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| children | node     | null         | -          |
| contained| boolean  | false        | -          |
| indented | boolean  | false        | -          |
| lineColor| string   | 'white'      | -          |
| lined    | boolean  | false        | -          |
| lineWidth| number   | 0            | -          |
| ordered  | boolean  | false        | -          |

#### TODO:
- [ ] tight, normal, high for vertical padding.
- [ ] background colors
- [ ] striped
- [ ] infer `lined` from lineColor prop existence

![mandala-bottom](https://user-images.githubusercontent.com/1824267/38281372-32114e5c-375f-11e8-9fbe-e5191b96429c.png)
