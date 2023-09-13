export const QUESTIONS_DATA = [
  {
    question:
      'Explain what is Javascript? List some data types supported by Javascript?',
    answer: `<p>&ensp; JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers.JavaScript is also an Object based Programming language.</p><p>&ensp; Below is the list of data types supported by Javascript:</p><ul><li>Undefined</li><li>Null</li><li>Boolean</li><li>String</li><li>Number</li><li>Symbol</li><li>Object</li></ul>`,
  },
  {
    question: 'What is the difference between let and var?',
    answer:
      '<p>&ensp; Both <b>var</b> and <b>let</b> are used for variable/ method declaration in javascript but the main difference between let and var is that var is function scoped whereas let is block scoped.</p>',
  },
  {
    question: 'Explain Closures in JavaScript?',
    answer:
      '<p>&ensp; Closures are the combination of lexical environment and function within which the function was declared. This allows JavaScript programmers to write better, more creative, concise and expressive codes. The closure will consist of all the local variables that were in-scope when the closure was created.</p>',
  },
  {
    question: 'Explain function hoisting in JavaScript?',
    answer:
      '<p>&ensp; JavaScript’s default behavior that allows moving declarations to the top is called Hoisting.</p>',
  },
  {
    question: 'Explain Arrow functions?',
    answer:
      '<p>&ensp; An arrow function is a concise and short way to write function expressions in Es6 or above. Arrow functions cannot be used as constructors and also does not supports this, arguments, super, or new target keywords. It is best suited for non-method functions.</p>',
  },
  {
    question: 'Explain Event bubbling and Event Capturing in JavaScript?',
    answer:
      '<p>&ensp; Event Capture and Bubbling: In HTML DOM API there are two ways of event propagation and determines the order in which event will be received. The two ways are Event Bubbling and Event Capturing. The first method event bubbling directs the event to its intended target, and the second is called event capture in which the event goes down to the element.</p>',
  },
  {
    question:
      'What is difference between deep and shallow object coping in JavaScript?',
    answer:
      '<p>&ensp;  Some differences are:</p><ul><li>Deep copy means copies all values or properties recursively in the new object whereas shallow copy copies only the reference.</li><li>In a deep copy, changes in the new object don`t show in original object whereas, in shallow copy, changes in new objects will reflect in the original object.</li><li>In a deep copy, original objects do not share the same properties with new object whereas, in shallow copy, they do.</li></ul>',
  },
  {
    question: 'Explain spread operator in JavaScript?',
    answer:
      '<p>The spread operator expands an expression in places where multiple argument/variables/elements are needed to present. It represents with three dots (…).</p>',
  },
  {
    question: 'Explain Promise in JavaScript?',
    answer:
      '<p>&ensp; A promise is an object in JavaScript which is used to produce a value that may give result in the future. The value can be resolved value or it can be a reason which tells why the value is not resolved.</p><p>&ensp; A promise can be of three states:</p><ul><li><b>Fulfilled:</b> The operation is completed and the promise has a specific value.</li><li><b>Rejected:</b> The operation is failed and promise has a reason which shows why the operation failed.</li><li><b>Pending:</b> Th operation is not fulfilled or rejected, means it has not completed yet.</li></ul>',
  },
  {
    question: 'What is `this` keyword in JavaScript?',
    answer:
      '<p>&ensp; <b>`This`</b> keyword refers to the object from where it was called.</p>',
  },
  {
    question: 'Explain the difference between "==" and "==="?',
    answer:
      '<p>&ensp; <b>"=="</b> checks only for equality in value whereas <b>"==="</b> is a stricter equality test and returns false if either the value or the type of the two variables are different.</p>',
  },
  {
    question: 'What is the difference between .call() and .apply()?',
    answer:
      '<p>&ensp; The function .call() and .apply() are very similar in their usage except a little difference. .call() is used when the number of the function`s arguments are known to the programmer, as they have to be mentioned as arguments in the call statement. On the other hand, .apply() is used when the number is not known. The function .apply() expects the argument to be an array.</p>',
  },
  {
    question: 'Define event bubbling?',
    answer:
      '<p>&ensp; JavaScript allows DOM elements to be nested inside each other. In such a case, if the handler of the child is clicked, the handler of parent will also work as if it were clicked too.</p>',
  },
  {
    question: 'What is an event loop?',
    answer:
      '<p>&ensp; An event loop is a programming construct that allows a program to handle multiple events or tasks simultaneously. It works by having the program keep track of all the events or tasks that need to be processed, and then processing them one by one as they come in. This can be a very efficient way to handle a lot of events or tasks, as it prevents the program from getting bogged down by having to process everything at once.</p>',
  },
  {
    question: 'Can you explain how a JavaScript event loop works?',
    answer:
      '<p>&ensp; The event loop is a mechanism that allows JavaScript to perform non-blocking operations. When an asynchronous task is started, the event loop will start running. Once the task is completed, the event loop will again check for any other tasks that need to be performed. This process will continue until all tasks have been completed.</p><img src="https://firebasestorage.googleapis.com/v0/b/interview-a7ac9.appspot.com/o/Javascript-event-loop.png?alt=media&token=fd4d90d4-6a03-4b4a-8fc1-b4b385a40eb9"/>',
  },
  {
    question: 'What is a Microtask in JavaScript?',
    answer: `<p>&ensp; A Microtask in JavaScript is a short, non-blocking task that's executed between tasks in the Event Loop, typically associated with resolving Promises and mutation observers.</p><img src="https://firebasestorage.googleapis.com/v0/b/interview-a7ac9.appspot.com/o/microtask.png?alt=media&token=c8610172-2347-4b54-8b0a-615b2fce0cb0" />`,
  },
  {
    question: 'What is a Macrotask in JavaScript?',
    answer:
      '<p>&ensp; A macrotask in JavaScript refers to a unit of work that is scheduled and executed asynchronously, typically involving I/O operations or rendering updates, using mechanisms like timers or event listeners.</p><img src="https://firebasestorage.googleapis.com/v0/b/interview-a7ac9.appspot.com/o/Screenshot%20from%202023-09-13%2012-27-34.png?alt=media&token=22fc5131-92f4-4fd8-908d-1f1182222111"/>',
  },
  {
    question:
      'What is the difference between a microtask and a task (macrotask) in the Event Loop?',
    answer:
      '<p>&ensp; Microtasks and Macrotasks are both tasks in the Event Loop. Microtasks have higher priority and execute between Macro-tasks, often associated with Promise resolutions and mutation observers. Tasks include callbacks from setTimeout, setInterval, and other Web APIs.</p>',
  },
  {
    question: 'What is a callback function?',
    answer:
      '<p>&ensp; A callback function is a function that is passed as an argument to another function. The callback function is then invoked inside of the other function. Callback functions are often used in event-driven programming, such as in the browser when handling user events.</p>',
  },
  {
    question:
      'Can you explain the difference between callbacks and promises? Which one would you choose for asynchronously executing code in a NodeJS application?',
    answer:
      '<p>&ensp; Callbacks are functions that are executed after a certain event has occurred. Promises are similar to callbacks, but they provide a more convenient way to handle asynchronous code. With promises, you can chain together multiple asynchronous operations, and you can be sure that the code will execute in the order that you expect. For these reasons, promises are generally the better choice for asynchronously executing code in a NodeJS application.</p>',
  },
  {
    question: 'Can you explain how setTimeout() works?',
    answer:
      '<p>&ensp; The <b>setTimeout()</b> function takes two arguments: a callback function and a delay in milliseconds. The callback function is executed once the delay has elapsed. The delay is not guaranteed to be accurate, but is usually within a few milliseconds.</p>',
  },
];
