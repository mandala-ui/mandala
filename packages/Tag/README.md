## Mandala UI Tag Component
Mandala is a React component library that utilizes a declarative CSS library for styling.

### Installation
Check the [MonoRepo README](https://github.com/mandala-ui/mandala) for installation.

### Description
Tag is just a simple element to show metadata in a small font

### Usage
if using the whole library:
```js
import { Tag } from 'mandala';
```
if only using this component:
```js
import Tag from '@mandala-ui/split-button';
```
### Props
* `backgroundColor` - the color of the surface area of the switches
* `disabled` - sets the button as disabled and reduces opacity 40%
* `isOn` - prop to switch which side of the switch is on
* `offColor` - the color of the off section when the switch is off
* `onClick` - function for onClick
* `onColor` - the color of the on section when the switch is on
* `pill` - sets the radius of the ends to 100%
* `radius` - the border radius of the button (1-4, clamped), is disabled if `pill` is set to `true`
* `showLabels` - shows the "on" and "off" text labels

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| backgroundColor | string | 'white' | -          |
| disabled  | string | 'black'      | -          |
| isOn      | boolean| false        | -          |
| offColor  | string | 'black'      | -          |
| onClick   | function| null        | -          |
| onColor   | string | 'black'      | -          |
| pill      | boolean| false        | -          |
| radius    | boolean| false        | -          |
| showLabels| boolean| false        | -          |


#### TODO:
- [ ] callback for analytics, etc
- [ ] colored border
- [ ] border width

![mandala-bottom](https://user-images.githubusercontent.com/1824267/38281372-32114e5c-375f-11e8-9fbe-e5191b96429c.png)
