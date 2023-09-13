import Image1 from './assets/image1.png';

export const QUESTIONS_DATA = [
  {
    question: 'What is React?',
    answer:
      '<p>&ensp; React is a Javascript Library which is used for building user interfaces. React is used as a base of a single webpage or mobile applications. React is using component approach. We have stateless and stateful components. Stateless has only external state. Stateful has internal and external state.</p>',
  },
  {
    question: 'Why we need use React?',
    answer:
      '<p>&ensp; Mostly for performance, if you working with DOM it is very expensive for performance. React worked with Virtual DOM. He compared real DOM with Virtual and update only necessary parts.</p>',
  },
  {
    question: 'What is Virtual DOM?',
    answer: `<p>&ensp; The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.</p>`,
  },
  {
    question: 'What is Props?',
    answer:
      '<p>&ensp; Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.</p>',
  },
  {
    question: 'What is a state in React and how is it used?',
    answer:
      '<p>&ensp; States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components.</p>',
  },
  {
    question: 'What are Hooks?',
    answer:
      '<p>&ensp; Hooks are functions that let us “hook into” React state and lifecycle features from a functional component.</p><p>&ensp; React Hooks cannot be used in class components. They let us write components without class.</p>',
  },
  {
    question: 'What is useState() in React?',
    answer:
      '<p>&ensp; The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling.</p>',
  },
  {
    question: 'How can you update the state of a component?',
    answer:
      '<p>&ensp; State of a component can be updated using this.setState() - class components or useState() - functional components</p>',
  },
  {
    question: 'What is arrow function in React? How is it used?',
    answer:
      '<p>&ensp; Arrow functions are more of brief syntax for writing the function expression. They are also called ‘fat arrow‘ (=>) the functions. These functions allow to bind the context of the components properly since in ES6 auto binding is not available by default. Arrow functions are mostly useful while working with the higher order functions.</p>',
  },
  {
    question: 'What are the different phases of React component’s lifecycle?',
    answer:
      '<p>&ensp; There are three different phases of React component’s lifecycle:</p><ul><li>Initial Rendering Phase: This is the phase when the component is about to start its life journey and make its way to the DOM.</li><li>Updating Phase: Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.</li><li>Unmounting Phase: This is the final phase of a component’s life cycle in which the component is destroyed and removed from the DOM.</li></ul>',
  },
  {
    question:
      'Explain the lifecycle methods of React Class components in detail?',
    answer:
      '<ul><li>componentWillMount() – Executed just before rendering takes place both on the client as well as server-side.</li><li>componentDidMount() – Executed on the client side only after the first render.</li><li>static getDerivedStateFromProps() – Invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.</li><li>shouldComponentUpdate() – Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false.</li><li>static getSnapshotBeforeUpdate() – Invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate().</li><li>componentDidUpdate() – Called immediately after rendering takes place.</li><li>componentWillUnmount() – Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.</li></ul>',
  },
  {
    question:
      'Explain the lifecycle methods of React Functional components in detail?',
    answer:
      '<ul><li>Mount phase\n   useEffect( () => {}, [])</li><li>Update phase\n   useEffect( () => {}, [params])</li><li>Unmount phase\n   useEffect( () => {return () => {this function will be triggered on unmount}}, [params])</li></ul>',
  },
  {
    question: 'How do you modularize code in React?',
    answer:
      '<p>&ensp; We can modularize code by using the export and import properties. They help in writing the components separately in different files.</p>',
  },
  {
    question: 'What are Higher Order Components(HOC)?',
    answer:
      '<p>&ensp; Higher Order Component is an advanced way of reusing the component logic. Basically, it’s a pattern that is derived from React’s compositional nature. HOC are custom components which wrap another component within it. They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components. You can say that HOC are ‘pure’ components.</p>',
  },
  {
    question: 'What can you do with HOC?',
    answer:
      '<p>&ensp; HOC can be used for many tasks like:</p><ul><li>Code reuse, logic and bootstrap abstraction</li><li>Render High jacking</li><li>State abstraction and manipulation</li><li>Props manipulation</li></ul>',
  },
  {
    question: 'What are Pure Components?',
    answer:
      '<p>&ensp; Pure components are the simplest and fastest components which can be written. They can replace any component which only has a render(). These components enhance the simplicity of the code and performance of the application.</p>',
  },
  {
    question: `What is Props Drilling and how can we avoid it ?`,
    answer:
      '<p>&ensp; Props Drilling (Threading) is a concept that refers to the process you pass the data from the parent component to the exact child Component BUT in between, other components owning the props just to pass it down the chain.</p><p>&ensp; Steps to avoid it:</p><ul><li>React Context API.</li><li>Composition</li><li>Render props</li><li>HOC</li><li>Redux or MobX</li></ul><img src="https://firebasestorage.googleapis.com/v0/b/interview-a7ac9.appspot.com/o/props.png?alt=media&token=2e275482-6a2d-4abd-bdda-4f9c706cc4c2"/>',
  },
];
