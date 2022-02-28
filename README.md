# My Reacts apps

This app fills out as Wolf learns writing React.js Apps.

Notes:

1. Get started by creating a [node-js-app](https://create-react-app.dev/)
2. [Pseudo elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) on your app


## JS

arrays have a `.map()` function. Use Map instead of for loops
```js
const numbers = [1,2,3]
const sqrd = numbers.map((num) => {
    return num * num
})
```

In props:
if a variable exists then insert whatever:
```js
{var && <h1>{var}</h1>}
```
 
 spreading items:
 ```js
 const items = [0,1,2,3]
 {...items}
 ```