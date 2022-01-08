# Deel Frontend Task

## Part 1:

To run this project

* Clone the repo from `git clone https://github.com/Orinameh/huspy-th.git`
* Run `yarn(npm) install`
* Then run `yarn start` to run the project


# Part 2

#### 1. Difference between a Component and PureComponent
A component rerenders when there is a change in the state or props of its Parent component but a PureComponent will not rerender if a its parent component does. PureComponent does this by perfoming a shallow comparism on state change. With this, a PureComponent is said to be performant than a Component.

#### 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
Ideally, `shouldComponentUpdate` references the `nextContext` of a component when there is rerendering.Since `shouldComponentUpdate` bypasses the rerendering, whenever the states or props of component are not correctly changed, `shouldComponentUpdate` will return false. This will make the state and props of the descendants component not to get update. As a result, their might be latency in the data which might cause problems.

#### 3. Describe 3 ways to pass information from a component to its PARENT.
a. By passing a callback function as a prop from the parent to the child component.
b. Using a state management tool like redux.
c. Context can also be used to achieve this.

#### 4. Give 2 ways to prevent components from re-rendering.
a. Memoizing components with `React.memo`, expensive functions with `useCallback` hook and expensive computation with `useMemo`
b. Using `shouldComponentUpdate` to do shallow comparism of state in class components.

### 5. What is a fragment and why do we need it? Give an example where it might break my app.
A fragment is a react element that is used for grouping several child components or elements in react without introducing a DOM elements. It's represented as `<React.Fragment></React.Fragment>` or `<></>` for short. An example where it might break an app is when you try to apply styling to it or when it was not properly closed.
#### 6. Give 3 examples of the HOC pattern.
A `Higher Order Component(HOC)` is a function that takes another component as an argument and return a new component. Examples include:
a. The `connect` function in redux is a perfect example of `HOCs`.
b. Another example is the Material-UI `withStyles`.
c. Finally, `StyledComponents` `withTheme` is also an example.

#### 7. what's the difference in handling exceptions in promises, callbacks and async...await.
In a promise, there is a catch exception that the error propagates to if the promise is rejected. E.g `promiseFunction().then().catch(err)`. In a traditional callback, the error is passed as an argument alongside the result in the callback. This helps to handle the error before the result. In async...await, errors are handled similar to the promises(async...await is a promise) but with a different syntax. e.g `try {const res = await somePromiseFunction()}catch(err){}`.

#### 8. How many arguments does setState take and why is it async.
The `setState` function has two arguments, 1. an object which contains the value to update and 2. the callback function which is asynchronous.

#### 9. List the steps needed to migrate a Class to Function Component.
a. Remove the `class` keyword and its extensions and replace with either `function` or `const` to define the function.
b. Convert states to using `useState` hook.
c. Conver any lifecycle methods to using `useEffect` hook. The `useEffect` hook can support all lifecycles of a react component.
d. Remove the `render` method and replace with `return` to display the `jsx elements`.
#### 10. List a few ways styles can be used with components.
There are several ways to style react components. They include:
a. Using custom css styles.
b. Css modules which react supports by default. This helps to scope css classes which is important to avoid clashing of styles.
c. Using Sass.
d. A popular that was inspired by React is `css-in-js` frameworks. Examples include `StyledComponents`, `EmotionCss` etc.

#### 11. How to render an HTML string coming from the server.
React exposes the `dangerouslySetInnerHTML` for settiing HTML string coming from the server. This helps to prevent exposure to cross-site-scripting popular known as `XSS` attack.
E.g `<div dangerouslySetInnerHTML={{__html: html}} />`
