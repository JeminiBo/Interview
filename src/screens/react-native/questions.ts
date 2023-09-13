
export const QUESTIONS_DATA = [
  {
    question: 'What is react-native?',
    answer:
      '<p>&ensp; There is framework for building native mobile app using React and JavaScript.</p>',
  },
  {
    question: 'What are the threads used in React Native?',
    answer:
      '<p>&ensp; React Native provides the following threads:</p><ul><li>Shadow Thread: it`s a background thread. We can calculate a layout created using React library inside React Native by this thread.</li><li>MAIN/UI Thread: It`s the main thread on which our app runs.</li><li>JavaScript Thread: it executes the main Javascript code.</li></ul>',
  },
  {
    question: 'How react-native works?',
    answer:
      '<p>&ensp; When you use react-native you have three threads (Js-thread, UI-thread, Shadow-thread). When some events called, data send from Js-thread to Shadow-thread throw the bridge. Then Shadow-thread compare UI-thread before and UI-thread after event. And send to UI-thread what he need update. That it.</p><img src="https://firebasestorage.googleapis.com/v0/b/interview-a7ac9.appspot.com/o/react-native-arch.webp?alt=media&token=0366ca72-dc7f-4c28-a830-d3db9592413b"/>',
  },
  {
    question: 'What about react-native performance?',
    answer:
      '<p>&ensp; We have three performance points. First is Java Script, in this point we can get some performance problem, but I don’t think so, Java Script is very fast. Second point is Native side. In this point we can’t get performance problem, because it is native code, he is very fast. And last point is bridge Js to Native. In this point we can get some performance problem, if we have very difficult animation, which re-render one of millisecond. That is why difficult animations, do on the native side.</p>',
  },
  {
    question: 'What does StyleSheet.create do?',
    answer:
      '<p>&ensp; StyleSheet.create method ensures that values are immutable and opaque, they are also only created once.</p>',
  },
  {
    question: 'List down some of the steps to optimize the application.',
    answer:
      '<ul><li>Use Proguard to minimize the application size.(It does this by stripping parts of the React Native Java bytecode (and its dependencies) that your app is not using)</li><li>Create reduced-sized APK files for specific CPU architectures. When you do that, your app users will automatically get the relevant APK file for their specific phone’s architecture. This eliminates the need to keep JSCore binaries that support multiple architectures and consequently reduces the app size.</li><li>Compress images and other graphic elements. Another option to reduce image size is using file types like APNG in place of PNG files.</li><li>Don’t store raw JSON data,  eIther we need to Compress it or convert it into static object IDs.</li><li>Optimize native libraries.</li><li>Optimize the number of state operations and remember to use pure and memoized components when needed</li><li>Use Global State wisely for example worst-case scenario is when state change of single control like TextInput or CheckBox propagates render of the whole application. Use libraries like Redux or Overmind.js to handle your state management in a more optimized way.</li><li>Use key attribute on list items, it helps React Native to pick which list to update when rendering a long list of data</li><li>Use VirtualizedList, FlatList, and SectionList for large data sets.</li><li>Clear all the active timers which may lead to heavy memory leakage issues.</li></ul>',
  },
  {
    question: 'How to make your React Native app feel smooth on animations ?',
    answer: `<p>&ensp; The primary reason and an important one why well-built native apps feel so smooth are by avoiding expensive operations during interactions and animations. React Native has a  limitation that there is only a single JS execution thread, but you can use InteractionManager to make sure long-running work is scheduled to start after any interactions/animations have completed.</p><img src="https://firebasestorage.googleapis.com/v0/b/interview-a7ac9.appspot.com/o/iteraction-manager.png?alt=media&token=b5f7f386-b20d-49d3-a41b-46202c652338" />`,
  },
  {
    question: 'What are the Different Ways to style React Native Application ?',
    answer:
      '<ul><li>Style props</li><li>Using StyleSheet</li><li>Styled-components in React Native</li></ul>',
  },
  {
    question:
      'Explain setNativeProps. Does it create Performance issues and how is it used ?',
    answer: `<p>&ensp; It is sometimes necessary to make changes directly to a component without using state/props to trigger a re-render of the entire subtree. When using React in the browser, for example, you sometimes need to directly modify a DOM node, and the same is true for views in mobile apps. setNativeProps is the React Native equivalent to setting properties directly on a DOM node.
    Use setNativeProps when frequent re-rendering creates a performance bottleneck.\nDirect manipulation will not be a tool that you reach for frequently; you will typically only be using it for creating continuous animations to avoid the overhead of rendering the component hierarchy and reconciling many views. setNativeProps is imperative and stores state in the native layer (DOM, UIView, etc.) and not within your React components, which makes your code more difficult to reason about. Before you use it, try to solve your problem with setState and shouldComponentUpdate.</p>`,
  },
];
