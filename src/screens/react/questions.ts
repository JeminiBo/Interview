import Image1 from './assets/image1.png';

export const QUESTIONS_DATA = [
  {
    question: 'What is React?',
    answer:
      'React is a Javascript Library which is used for building user interfaces. React is used as a base of a single webpage or mobile applications. React is using component approach. We have stateless and stateful components. Stateless has only external state. Stateful has internal and external state.',
  },
  {
    question: 'Why we need use React?',
    answer:
      'Mostly for performance, if you working with DOM it is very expensive for performance. React worked with Virtual DOM. He compared real DOM with Virtual and update only necessary parts.',
  },
  {
    question: 'What is Virtual DOM?',
    answer: `The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.`,
  },
  {
    question: 'What is Props?',
    answer:
      'Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.',
  },
  {
    question: 'What is a state in React and how is it used?',
    answer:
      'States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components.',
  },
  {
    question: 'What are Hooks?',
    answer:
      'Hooks are functions that let us “hook into” React state and lifecycle features from a functional component.\nReact Hooks cannot be used in class components. They let us write components without class.',
  },
  {
    question: 'What is useState() in React?',
    answer:
      'The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling.',
  },
  {
    question: 'How can you update the state of a component?',
    answer:
      'State of a component can be updated using this.setState() - class components or useState() - functional components',
  },
  {
    question: 'What is arrow function in React? How is it used?',
    answer:
      'Arrow functions are more of brief syntax for writing the function expression. They are also called ‘fat arrow‘ (=>) the functions. These functions allow to bind the context of the components properly since in ES6 auto binding is not available by default. Arrow functions are mostly useful while working with the higher order functions.',
  },
  {
    question: 'What are the different phases of React component’s lifecycle?',
    answer:
      'There are three different phases of React component’s lifecycle:\n  • Initial Rendering Phase: This is the phase when the component is about to start its life journey and make its way to the DOM.\n  • Updating Phase: Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.\n  • Unmounting Phase: This is the final phase of a component’s life cycle in which the component is destroyed and removed from the DOM.',
  },
  {
    question:
      'Explain the lifecycle methods of React Class components in detail?',
    answer:
      '• componentWillMount() – Executed just before rendering takes place both on the client as well as server-side.\n• componentDidMount() – Executed on the client side only after the first render.\n• static getDerivedStateFromProps() – Invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.\n• shouldComponentUpdate() – Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false.\n• static getSnapshotBeforeUpdate() – Invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate().\n• componentDidUpdate() – Called immediately after rendering takes place.\n• componentWillUnmount() – Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.',
  },
  {
    question:
      'Explain the lifecycle methods of React Functional components in detail?',
    answer:
      '• Mount phase\n   useEffect( () => {}, [])\n• Update phase\n   useEffect( () => {}, [params])\n• Unmount phase\n   useEffect( () => {return () => {this function will be triggered on unmount}}, [params])',
  },
  {
    question: 'How do you modularize code in React?',
    answer:
      'We can modularize code by using the export and import properties. They help in writing the components separately in different files.',
  },
  {
    question: 'What are Higher Order Components(HOC)?',
    answer:
      'Higher Order Component is an advanced way of reusing the component logic. Basically, it’s a pattern that is derived from React’s compositional nature. HOC are custom components which wrap another component within it. They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components. You can say that HOC are ‘pure’ components.',
  },
  {
    question: 'What can you do with HOC?',
    answer:
      'HOC can be used for many tasks like:\n • Code reuse, logic and bootstrap abstraction\n • Render High jacking\n • State abstraction and manipulation\n • Props manipulation',
  },
  {
    question: 'What are Pure Components?',
    answer:
      'Pure components are the simplest and fastest components which can be written. They can replace any component which only has a render(). These components enhance the simplicity of the code and performance of the application.',
  },
  {
    question: `What is Props Drilling and how can we avoid it ?`,
    answer:
      'Props Drilling (Threading) is a concept that refers to the process you pass the data from the parent component to the exact child Component BUT in between, other components owning the props just to pass it down the chain.\n Steps to avoid it:\n1. React Context API.\n2.  Composition\n3. Render props\n4. HOC\n5. Redux or MobX',
    image: Image1,
  },
];
