# react-popconfirm

[![version](https://img.shields.io/npm/v/react-popconfirm.svg?style=flat-square)](http://npm.im/react-popconfirm)
[![downloads](https://img.shields.io/npm/dm/react-popconfirm.svg?style=flat-square)](http://npm-stat.com/charts.html?package=react-popconfirm&from=2017-04-07)
[![MIT License](https://img.shields.io/npm/l/react-popconfirm.svg?style=flat-square)](http://opensource.org/licenses/MIT)

A popover confirm dialog  for react, [react-bootstrap](https://react-bootstrap.github.io/components.html#popovers) and [react-confirm](https://github.com/haradakunihiko/react-confirm) are used with.

## Usage

```js
// import first
import PopConfirm from 'react-popconfirm'


// call it!
PopConfirm({
	confirmation:'Are you sure?',
	okLabbel: 'Yes',
	cancelLabel: 'No',
	placement:'top',
	element:target	// target is the element you clicked
  }).then(
  (result) => {
    // `proceed` callback
    console.log('proceed called');
    console.log(result);
  },
  (result) => {
    // `cancel` callback
    console.log('cancel called');
    console.log(result)
  }
)
// nothing will be called when `dismiss` is triggered.
```

## Try example

```
cd example
npm install
npm run build
npm start
```

## License

MIT