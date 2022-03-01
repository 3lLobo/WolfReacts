# My Reacts apps

This readme fills out as Wolf learns writing React.js Apps.
These are mostly personal notes, in shape and size of brain farts intended for my future self. If you still want to read along, enjoy 😹
Notes:

1. Get started by creating a [node-js-app](https://create-react-app.dev/)
2. [Pseudo elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) on your app
3. [MaterialUI](https://mui.com/getting-started/installation/)

```bash
npx create-react-app my-app
```

React state, rerenderes elements on change:
```jsx
[obj, setObj] = useState("Obj")

<img src={obj} onClich={setObj(prevObj => prevObj + "change")}>
```
Don't change state of data or received props. Rather copy that data and change the copy.


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
 