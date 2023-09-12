import Image1 from './assets/image1.png';
import Image2 from './assets/image2.png';
import Image3 from './assets/image3.png';

export const QUESTIONS_DATA = [
  {
    question: 'What is TypeScript?',
    answer:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It is pure object-oriented with classes, interfaces and statically typed programming languages like C# or Java. You will need a compiler to compile and generate the code in the JavaScript file. Basically, TypeScript is the ES6 version of JavaScript with some additional features.',
  },
  {
    question: 'What are the Differences between TypeScript and JavaScript?',
    answer: '',
    image: Image1,
  },
  {
    question: 'Why do we need TypeScript?',
    answer:
      '1. Using new features of ECMAScript: TypeScript supports new ECMAScript standards and transpile them to ECMAScript targets of your choice. So, you can use features of ES2015 and beyond.\n2. Static Typing: JavaScript is dynamically typed and does not know what type a variable is until it is actually instantiated at run-time. TypeScript adds type support to JavaScript.\n3. Type Inference: TypeScript makes typing a bit easier and a lot less explicit by the usage of type inference. Even if you don’t explicitly type the types, they are still there to save you from doing something which otherwise would result in a run-time error.\n4. Better IDE Support: The development experience with TypeScript is a great improvement over JavaScript. There is a wide range of IDEs that have excellent support for TypeScript, like Visual Studio & VS code, Atom, Sublime, and IntelliJ/WebStorm.\n5. Strict Null Checking: Errors, like cannot read property ‘x’ of undefined, is common in JavaScript programming. You can avoid most of these kinds of errors since one cannot use a variable that is not known to the TypeScript compiler.\n6. Interoperability: TypeScript is closely related to JavaScript so it has great interoperability capabilities, but some extra work is required to work with JavaScript libraries in TypeScript.',
  },
  {
    question: 'What are the Disadvantages of TypeScript?',
    answer:
      '1. TypeScript takes a long time to compile the code.\n2. It does not support abstract classes.\n3. If we run the TypeScript application in the browser, a compilation step is required to transform TypeScript into JavaScript.\n4. Web developers are using JavaScript for decades and TypeScript doesn’t bring anything new.\n5. To use any third party library, the definition file is a must.\n6. Quality of type definition files is a concern.',
  },
  {
    question: 'What are the primitive types in TypeScript?',
    answer:
      'Built-in Types:\n • string\n • number\n • boolean\n • void\n • Symbol\n • null & undefined\nUser-Defined Types\n • arrays\n • enums\n • classes\n • interfaces',
  },
  {
    question: 'What is any type, and when to use it?',
    answer:
      'There are times when you want to store a value in a variable but don’t know the type of that variable in advance. For example, the value is coming from an API call or the user input. The ‘any’ type allows you to assign a value of any type to the variable of type any.',
  },
  {
    question: 'What is void, and when to use the void type?',
    answer:
      'The void indicates the absence of type on a variable. It acts as the opposite type to any. It is especially useful in functions that don’t return a value.',
  },
  {
    question: 'What is an unknown type, and when to use it in TypeScript?',
    answer:
      'The unknown type is the type-safe counterpart of any type. You can assign anything to the unknown, but the unknown isn’t assignable to anything but itself and any, without performing a type assertion of a control-flow-based narrowing. You cannot perform any operations on a variable of an unknown type without first asserting or narrowing it to a more specific type.',
  },
  {
    question: 'What is undefined in TypeScript?',
    answer:
      'When a variable is declared without initialization, it’s assigned the undefined value. It’s not very useful on its own. A variable is undefined if it’s declared, but no value has been assigned to it. In contrast, null is assigned to a variable, and it represents no value.',
  },
  {
    question: 'Explain the purpose of the never type in TypeScript.',
    answer:
      'As the name suggests, the never type represents the type of values that never occur. For example, a function that never returns a value or that always throws an exception can mark its return type as never.\nYou might wonder why we need a ‘never’ type when we already have ‘void’. Though both types look similar, they represent two very different concepts.\nA function that doesn`t return a value implicitly returns the value undefined in JavaScript. Hence, even though we are saying it’s not returning anything, it’s returning ‘undefined’. We usually ignore the return value in these cases. Such a function is inferred to have a void return type in TypeScript.',
  },
  {
    question: 'Explain how enums work in TypeScript?',
    answer:
      'Enums allow us to create named constants. It is a simple way to give more friendly names to numeric constant values. An enum is defined by the keyword enum, followed by its name and the members.',
  },
  {
    question: 'Explain the symbol type in TypeScript.',
    answer:
      'Symbols were introduced in ES6 and are supported by TypeScript. Similar to numbers and strings, symbols are primitive types. You can use Symbols to create unique properties for objects.',
  },
  {
    question: 'What is an interface?',
    answer:
      'An interface defines a contract by specifying the type of data an object can have and its operations. In TypeScript, you can specify an object’s shape by creating an interface and using it as its type. It’s also called “duck typing”.\nInterfaces are an effective way to specify contracts within your code as well as outside your code.',
  },
  {
    question:
      'Explain the various ways to control member visibility in TypeScript.',
    answer:
      'TypeScript provides three keywords to control the visibility of class members, such as properties or methods.\n• Public: You can access a public member anywhere outside the class. All class members are public by default.\n• Protected: A protected member is visible only to the subclasses of the class containing that member. Outside code that doesn’t extend the container class can’t access a protected member.\n• Private: A private member is only visible inside the class. No outside code can access the private members of a class.',
  },
  {
    question: 'What are abstract classes? When should you use one?',
    answer:
      'Abstract classes are similar to interfaces in that they specify a contract for the objects, and you cannot instantiate them directly. However, unlike interfaces, an abstract class may provide implementation details for one or more of its members.\nAn abstract class marks one or more of its members as abstract. Any classes that extend an abstract class have to provide an implementation for the abstract members of the superclass.',
  },
  {
    question: 'What are union types in TypeScript?',
    answer:
      'A union type is a special construct in TypeScript that indicates that a value can be one of several types. A vertical bar (|) separates these types.',
  },
  {
    question: 'Explain the tuple types in TypeScript.',
    answer:
      'Tuples are a special type in TypeScript. They are similar to arrays with a fixed number of elements with a known type. However, the types need not be the same.',
  },
  {
    question: 'What are Mixins?',
    answer:
      'In Javascript, Mixins are a way of building up classes from reusable components and then build them by combining simpler partial classes.\nThe idea is simple, instead of a class A extending class B to get its functionality, function B takes class A and returns a new class with this added functionality. Here, function B is a mixin.',
  },
  {
    question: 'What are Generics in TypeScript?',
    answer:
      'TypeScript Generics is a tool that provides a way of creating reusable components. It is able to create components that can work with a variety of data types rather than a single data type. Also, it provides type safety without compromising the performance, or productivity. Generics allow us to create generic classes, generic functions, generic methods, and generic interfaces.\nIn generics, a type parameter is written between the open (<) and close (>) brackets which makes it strongly typed collections. It uses a special kind of type variable <T> that denotes types.',
    image: Image2,
  },
  {
    question: 'What is the difference between interface and type statements?',
    answer: '',
    image: Image3,
  },
];
