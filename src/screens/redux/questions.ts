export const QUESTIONS_DATA = [
  {
    question: 'What is Redux?',
    answer:
      'Redux is one of the hottest libraries for front-end development in today’s marketplace. It is a predictable state container for JavaScript applications and is used for the entire applications state management. Applications developed with Redux are easy to test and can run in different environments showing consistent behavior.',
  },
  {
    question: 'Why we need use Redux?',
    answer:
      'Redux provide you store, and some functionality for control store. The state of your whole application is stored in an object tree within a single store.',
  },
  {
    question: 'What is Redux in React js?',
    answer:
      'Redux in React is the official React binding for Redux which allows the components in React to read data from a Redux Store, and dispatch Actions to the Store for updating the data. The purpose of Redux is to help applications scale well by providing means to manage the state via a unidirectional data flow model.',
  },
  {
    question: 'What are the three principles that Redux follows?',
    answer:
      '• Single source of truth -  The state of the entire application is stored in an object/ state tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.\n• State is read-only -  The only way to change the state is to trigger an action. An action is a plain JS object describing the change. Just like state is the minimal representation of data, the action is the minimal representation of the change to that data.\n• Changes are made with pure functions - In order to specify how the state tree is transformed by actions, you need pure functions. Pure functions are those whose return value depends solely on the values of their arguments.',
  },
  {
    question: 'What do you understand by “Single source of truth”?',
    answer:
      'Redux uses ‘Store’ for storing the application’s entire state at one place. So all the component’s state are stored in the Store and they receive updates from the Store itself. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.',
  },
  {
    question: `What are reducers in Redux's architecture?`,
    answer: `Reducers in Redux's architecture are pure functions that are used to take the previous state and an action and return the next state. `,
  },
  {
    question: `What do you understand by an action in Redux's architecture?`,
    answer:
      'In the Redux architecture, actions are nothing but the plain JavaScript objects which contain a type field. They can be thought of as an event that is used to describe something which has happened in the application. Actions contain only a tiny bit of information that is required to mention what has happened.',
  },
  {
    question: 'What do you understand about Redux Toolkit?',
    answer: `Redux Toolkit is Redux's official, opinionated, batteries included toolset for efficient Redux development. It also consists of the most widely used Redux add-ons, for instance, Redux Thunk for asynchronous logic,  Reselect for writing selector functions and many more for making development easy for developers and saving them time.`,
  },
  {
    question: 'What do you understand about Redux Thunk?',
    answer:
      'Using Redux Thunk middleware, we can write action creators returning a function instead of an action. This thunk can postpone the dispatch of an action, or do conditional dispatchment. The arguments passed to the inner function are the store methods dispatch and getState(). In the event of an action creator returning a function, the function gets executed by the Redux Thunk middleware and it does not have to be pure. In other words, the function is allowed to have side effects, including executing asynchronous API calls. It can even dispatch actions. Redux thunk is used to delay the dispatch of an action, or to dispatch in the event of a certain condition being met. At the time of dispatch of a function instead of an action object, if Redux Thunk middleware is enabled, the middleware will call that function with the dispatch method itself as the first argument.',
  },
  {
    question: 'What do you understand about the Redux Saga?',
    answer:
      'Redux Saga is a middleware library that can be useful for allowing a Redux store to interact with the resources outside of itself in an asynchronous manner, for example, making HTTP requests to external services, accessing browser storage, executing Input/Output operations and many more. These operations are also called side effects.',
  },
  {
    question: 'What are selectors in Redux?',
    answer:
      'Selectors are Redux functions that take a Redux state as input and return a subset of it after applying various calculations, transformations, mappings, filters, etc. In this manner, a selector might contain the logic of how to retrieve data for a certain view.',
  },
  {
    question: 'What is a Slice in Redux?',
    answer:
      'The idea that your Redux Store should be divided into slices rather than numerous reducer files, action files, and selector files has been formalized thanks to the Redux Toolkit. Each slice is typically responsible for owning any reducers, selectors, or thunks that primarily access or manipulate its particular portion of the data.\n Reducers are where the Redux State is updated, and RTK`s createSlice function makes the process of creating them simpler. Each of our reducers has the opportunity to respond to an action by creating a new state when it is passed to our Redux Store. Without RTK, Redux reducers frequently have massive switch statements that scan for various action kinds. RTK allows you to design reducer methods and automatically generates the actions and action types related to those methods.',
  },
];
