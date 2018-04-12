# Mandala UI Image
Mandala is a React component library that utilizes a declarative CSS.

### Description
An image component is used to render a picture element with a `srcset`, and smart fallback. You can pass a string url, or an object with `desktop`, `tablet`, and `mobile` keys. The key values should have an array of one or two image urls, the first for 1x pixel density and one for 2x.

The image Defaults to 100% width regardless of actual image size.

### Installation

Check the [Monorepo README](https://github.com/mandala-ui/mandala) for installation.

### Usage
if using the whole library:
```js
import { Image } from 'mandala';
```
if only using this component:
```js
import Image from '@mandala-ui/image';
```

### Props
* `alt` - the alt text for the image
* `images` - an object that contains the keys `desktop`, `tablet`, and `mobile`, with values having a URL that correlates to the image you want to show on that device.
* `shadow` - drop shadow to add on the image, from 0-5
* `radius` - border radius of the image, from 0-4
* `url` - the URL for the base image. If this is the only thing that is passed, then you don't need to pass an `images` object

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| alt      | string | "blank figure"| Yes          |
| images   | object | null         | -          |
| shadow   | number | 0         | -          |
| radius   | number | 0         | -          |
| url      | string | `http://via.placeholder.com/1600x900/CDECFF`| Yes         |


![mandala-bottom](https://user-images.githubusercontent.com/1824267/38281372-32114e5c-375f-11e8-9fbe-e5191b96429c.png)
