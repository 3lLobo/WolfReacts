# My React notes

This readme fills out as Wolf learns writing React.js Apps.
These are mostly personal notes, in shape and size of brain farts intended for my future self. If you still want to read along, enjoy 😹
Notes:

1. Get started by creating a [node-js-app](https://create-react-app.dev/)
2. [Pseudo elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) on your app
3. [MaterialUI](https://mui.com/getting-started/installation/) for styled elements
4. [Formik](https://formik.org/docs/overview) and yup for simplifying forms 
4. More styling: [Material-ui](https://www.npmjs.com/package/@material-ui/core)
5. Import `.css` files into where they should be used. `Ap.css` into `App.jsx`. Sometimes components need to import their own `.css` files too
6. With [Styled-components](https://styled-components.com/docs/basics) you can write the style inside the js file. Follow the second step too!
6. Add this: `npm i --save-dev @types/styled-components`
7. Time libraries: moment, TimeAgo
8

```bash
npx create-react-app my-app
```

React state, rerenderes elements on change:
```jsx
[obj, setObj] = useState("Obj")

<img src={obj} onClick={setObj(prevObj => prevObj + "change")}>
```
Don't change state of data or received props. Rather copy that data and change the copy. If you need to change the original, create a `useState(data).

Things React __**can't**__ handle:
 - local filesystem
 - API interactions
 - subscriptions/websockets
 - syncing internal states


In these cases `useEffect()`. Retrun cleanup function to avoid memory leak. For local storage, this will clear the local storage once the page is closed:

```jsx
useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
    return localStorage.removeItem("notes") });
```

Listen to events with `window.addEventListener()`. Function which are called `onClick={}` automatically get passed the `event` handle with all the atributes such as the text which is being typed into a textfield. If you want to pass on more parameters to the function use this trick:
```html
<onClick={(event) => props.function(event, param)}>
``` 



### Lazy initialization

When using `useState(_initVal)` react will load the init value everytime it rerenders. To avoid this, lazy initialize by making it a function call:
```js
[state, setState] = useState(() => _initVal)
```


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
 

Fetch data:
```js
fetch("https://my.api/request")
    .then(res => res.json)
    .then(data => doSome(data))
// or
async function apiCall() {
    const res = await fetch("https://my.api/request")
    const data = await res.json
    doSome(data)
}
```

The dubble bars `||` mean or. If the first expression returns `undefined`, the expression after the double bars is used.
```js
const x = undefined || 11;
```
  
Filter an array, return all the elements without matching id:
```js
const newArr = arr.filter(val => val.id !== id);
```