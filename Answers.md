# Answers

1.  What is React JS and what problems does it try and solve?

React Js is an unopinionated UI library. It was created to help build UI's easier and faster. React aims to handle complex DOM Operations and render them to the browser as fast as possible. DOM operations are quite expensive in terms of performance, and any application that has much of DOM operations in the background will render slowly.
If a page has data that changes over time at high rates (for example, lots of people commenting on a post, likes being generated etc), then there is a requirement for DOM updates to be very fast and also reflect in other parts of the UI if they use the same data. React solves this problem, without even having the page reload. It does by a concept called virtual DOM. When a page is rendered using React, the state of the DOM tree structure/hierarchy is stored, and when there any updates to be made to the UI, it does a diff on the previous (old) DOM tree with the new one, and updates only the ones that have changed. In this way, lots of DOM operations/refreshes are reduced, improving performance considerably.


1.  What does it mean to _think_ in react?

It means to think about the structure of the code. If you have a design mockup, you first have to break down the designs and see how you can sturcture them into components. Think about how you would structure your state and how many states you would need and where to hoist the state. Basically its mainly about think of the step by step process to completing the project so as to make it easier to build when you start


1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

The most obvious one difference is the syntax. A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element.
Functional component is just a plain JavaScript function, you cannot use setState() in your component. That’s the reason why they also get called functional stateless components. So everytime you see a functional component you can be sure that this particular component doesn’t have its own state.


1.  Describe state.

props hold immutable data and are rendered by components, then state stores data about the component that can change over time. Change could come in the form of user events or system events such as response to user input or server requests.


1.  Describe props.

props can best be defined as a way of passing data from component to component, basically from parent to child component. 
