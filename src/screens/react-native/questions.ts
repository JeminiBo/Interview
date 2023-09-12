import Image1 from './assets/image1.png';

export const QUESTIONS_DATA = [
  {
    question: 'What is react-native?',
    answer:
      'There is framework for building native mobile app using React and JavaScript.',
  },
  {
    question: 'What are the threads used in React Native?',
    answer:
      'React Native provides the following threads:\n• Shadow Thread: it`s a background thread. We can calculate a layout created using React library inside React Native by this thread.\n• MAIN/UI Thread: It`s the main thread on which our app runs.\n• JavaScript Thread: it executes the main Javascript code.',
  },
  {
    question: 'How react-native works?',
    answer:
      'When you use react-native you have three threads (Js-thread, UI-thread, Shadow-thread). When some events called, data send from Js-thread to Shadow-thread throw the bridge. Then Shadow-thread compare UI-thread before and UI-thread after event. And send to UI-thread what he need update. That it.',
  },
  {
    question: 'What about react-native performance?',
    answer:
      'We have three performance points. First is Java Script, in this point we can get some performance problem, but I don’t think so, Java Script is very fast. Second point is Native side. In this point we can’t get performance problem, because it is native code, he is very fast. And last point is bridge Js to Native. In this point we can get some performance problem, if we have very difficult animation, which re-render one of millisecond. That is why difficult animations, do on the native side.',
  },
  {
    question: 'What does StyleSheet.create do?',
    answer:
      'StyleSheet.create method ensures that values are immutable and opaque, they are also only created once.',
  },
  {
    question: 'List down some of the steps to optimize the application.',
    answer:
      '1. Use Proguard to minimize the application size.(It does this by stripping parts of the React Native Java bytecode (and its dependencies) that your app is not using)\n2. Create reduced-sized APK files for specific CPU architectures. When you do that, your app users will automatically get the relevant APK file for their specific phone’s architecture. This eliminates the need to keep JSCore binaries that support multiple architectures and consequently reduces the app size.\n3. Compress images and other graphic elements. Another option to reduce image size is using file types like APNG in place of PNG files.\n4. Don’t store raw JSON data,  eIther we need to Compress it or convert it into static object IDs.\n5. Optimize native libraries.\n6. Optimize the number of state operations and remember to use pure and memoized components when needed\n7. Use Global State wisely for example worst-case scenario is when state change of single control like TextInput or CheckBox propagates render of the whole application. Use libraries like Redux or Overmind.js to handle your state management in a more optimized way.\n8. Use key attribute on list items, it helps React Native to pick which list to update when rendering a long list of data \n9. Use VirtualizedList, FlatList, and SectionList for large data sets.\n10. Clear all the active timers which may lead to heavy memory leakage issues.',
  },
  {
    question: 'How to make your React Native app feel smooth on animations ?',
    answer:
      'The primary reason and an important one why well-built native apps feel so smooth are by avoiding expensive operations during interactions and animations. React Native has a  limitation that there is only a single JS execution thread, but you can use InteractionManager to make sure long-running work is scheduled to start after any interactions/animations have completed.\n',
    image: Image1,
  },
  {
    question: 'What are the Different Ways to style React Native Application ?',
    answer:
      '1. Style props\n2. Using StyleSheet\n3. Styled-components in React Native',
  },
  {
    question:
      'Explain setNativeProps. Does it create Performance issues and how is it used ?',
    answer: `It is sometimes necessary to make changes directly to a component without using state/props to trigger a re-render of the entire subtree. When using React in the browser, for example, you sometimes need to directly modify a DOM node, and the same is true for views in mobile apps. setNativeProps is the React Native equivalent to setting properties directly on a DOM node.
    Use setNativeProps when frequent re-rendering creates a performance bottleneck.\nDirect manipulation will not be a tool that you reach for frequently; you will typically only be using it for creating continuous animations to avoid the overhead of rendering the component hierarchy and reconciling many views. setNativeProps is imperative and stores state in the native layer (DOM, UIView, etc.) and not within your React components, which makes your code more difficult to reason about. Before you use it, try to solve your problem with setState and shouldComponentUpdate.

    `,
  },
];
