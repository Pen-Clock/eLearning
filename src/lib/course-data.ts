export const courseData = [
  {
    id: "web-dev-fundamentals",
    title: "Web Development Fundamentals",
    description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
    thumbnail: "https://rw46865x0j.ufs.sh/f/2Qpnhu1TY6sVJzjiq0esg1Yxp6TvjwEU30GrB2yJkdA7IRme?height=400&width=600",
    category: "Web Development",
    duration: "8 weeks",
    level: "Beginner",
    progress: 65,
    modules: [
      {
        id: 1,
        title: "Getting Started with HTML",
        videoUrl: "https://www.youtube.com/embed/HD13eq_Pmp8?si=lGhkl2mDYw80qCNW",
        textContent: `
          <h2>HTML Basics</h2>
          <p>HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the structure of web content.</p>
          
          <h3>HTML Elements</h3>
          <p>HTML elements are represented by tags, written using angle brackets. For example, the paragraph tag is written as &lt;p&gt;. Tags usually come in pairs like &lt;p&gt; and &lt;/p&gt;, where the first tag is the start tag and the second tag is the end tag.</p>
          
          <h3>Basic Structure</h3>
          <p>A basic HTML document structure includes the following elements:</p>
          <ul>
            <li>&lt;!DOCTYPE html&gt; - Defines the document type</li>
            <li>&lt;html&gt; - The root element</li>
            <li>&lt;head&gt; - Contains meta information</li>
            <li>&lt;title&gt; - Specifies a title for the document</li>
            <li>&lt;body&gt; - Contains the visible page content</li>
          </ul>
        `,
        quiz: {
          title: "HTML Basics Quiz",
          questions: [
            {
              id: 1,
              question: "What does HTML stand for?",
              options: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language",
              ],
              correctAnswer: 0,
            },
            {
              id: 2,
              question: "Which tag is used to define a paragraph in HTML?",
              options: ["<paragraph>", "<p>", "<para>", "<text>"],
              correctAnswer: 1,
            },
            {
              id: 3,
              question: "Which element is the root element in HTML?",
              options: ["<body>", "<head>", "<html>", "<root>"],
              correctAnswer: 2,
            },
            {
              id: 4,
              question: "Which HTML element is used to define the title of a document?",
              options: ["<meta>", "<head>", "<header>", "<title>"],
              correctAnswer: 3,
            },
            {
              id: 5,
              question: "Which HTML tag is used to define an unordered list?",
              options: ["<ul>", "<ol>", "<list>", "<dl>"],
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 2,
        title: "CSS Fundamentals",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        textContent: `
          <h2>CSS Fundamentals</h2>
          <p>CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.</p>
          
          <h3>CSS Syntax</h3>
          <p>A CSS rule consists of a selector and a declaration block. The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons.</p>
          
          <h3>CSS Selectors</h3>
          <p>CSS selectors are used to "find" (or select) the HTML elements you want to style. Here are some common selectors:</p>
          <ul>
            <li>Element selector (selects elements based on the element name)</li>
            <li>ID selector (selects an element based on its id attribute)</li>
            <li>Class selector (selects elements with a specific class attribute)</li>
          </ul>
          
          <h3>CSS Box Model</h3>
          <p>All HTML elements can be considered as boxes. The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.</p>
        `,
        quiz: {
          title: "CSS Fundamentals Quiz",
          questions: [
            {
              id: 1,
              question: "What does CSS stand for?",
              options: [
                "Creative Style Sheets",
                "Cascading Style Sheets",
                "Computer Style Sheets",
                "Colorful Style Sheets",
              ],
              correctAnswer: 1,
            },
            {
              id: 2,
              question: "Which property is used to change the background color?",
              options: ["color", "bgcolor", "background-color", "background"],
              correctAnswer: 2,
            },
            {
              id: 3,
              question: "Which CSS property controls the text size?",
              options: ["text-size", "font-size", "text-style", "font-style"],
              correctAnswer: 1,
            },
            {
              id: 4,
              question: "Which CSS property is used to change the text color of an element?",
              options: ["color", "text-color", "font-color", "text-style"],
              correctAnswer: 0,
            },
            {
              id: 5,
              question: "Which CSS property sets the space between the elements content and its border?",
              options: ["margin", "padding", "spacing", "border-spacing"],
              correctAnswer: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: "javascript-essentials",
    title: "JavaScript Essentials",
    description: "Master the essential concepts of JavaScript programming language.",
    thumbnail: "https://rw46865x0j.ufs.sh/f/2Qpnhu1TY6sVlnY3cRltaEOsvfFQcBZHdGtmV86KP73kSiUr?height=400&width=600",
    category: "Programming",
    duration: "6 weeks",
    level: "Intermediate",
    progress: 25,
    modules: [
      {
        id: 1,
        title: "JavaScript Basics",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        textContent: `
          <h2>JavaScript Basics</h2>
          <p>JavaScript is a programming language that enables interactive web pages. It is an essential part of web applications and can be used on both the client-side and server-side.</p>
          
          <h3>Variables and Data Types</h3>
          <p>JavaScript has several data types: String, Number, Boolean, Object, Undefined, and Null. Variables can be declared using var, let, or const keywords.</p>
          
          <h3>Functions</h3>
          <p>Functions are blocks of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).</p>
          
          <h3>Control Flow</h3>
          <p>JavaScript supports conditional statements like if...else and switch, as well as loops like for, while, and do...while.</p>
        `,
        quiz: {
          title: "JavaScript Basics Quiz",
          questions: [
            {
              id: 1,
              question: "Which keyword is used to declare a variable in JavaScript?",
              options: ["var", "variable", "v", "declare"],
              correctAnswer: 0,
            },
            {
              id: 2,
              question: "Which of the following is not a JavaScript data type?",
              options: ["String", "Number", "Boolean", "Float"],
              correctAnswer: 3,
            },
            {
              id: 3,
              question: "How do you create a function in JavaScript?",
              options: [
                "function myFunction()",
                "function:myFunction()",
                "function = myFunction()",
                "create myFunction()",
              ],
              correctAnswer: 0,
            },
            {
              id: 4,
              question: "How do you call a function named 'myFunction'?",
              options: ["call myFunction()", "myFunction()", "call function myFunction()", "execute myFunction()"],
              correctAnswer: 1,
            },
            {
              id: 5,
              question: "Which operator is used to assign a value to a variable?",
              options: ["=", "*", "-", "x"],
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 2,
        title: "DOM Manipulation",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        textContent: `
          <h2>DOM Manipulation</h2>
          <p>The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.</p>
          
          <h3>Selecting Elements</h3>
          <p>JavaScript provides several methods to select HTML elements:</p>
          <ul>
            <li>getElementById()</li>
            <li>getElementsByClassName()</li>
            <li>getElementsByTagName()</li>
            <li>querySelector()</li>
            <li>querySelectorAll()</li>
          </ul>
          
          <h3>Modifying Elements</h3>
          <p>Once you've selected an element, you can modify its content, attributes, and styles.</p>
          
          <h3>Event Handling</h3>
          <p>JavaScript can be used to handle events like clicks, form submissions, and keyboard inputs.</p>
        `,
        quiz: {
          title: "DOM Manipulation Quiz",
          questions: [
            {
              id: 1,
              question: "What does DOM stand for?",
              options: [
                "Document Object Model",
                "Digital Ordinance Model",
                "Document Order Management",
                "Data Object Model",
              ],
              correctAnswer: 0,
            },
            {
              id: 2,
              question: "Which method is used to select an element by its id?",
              options: ["querySelector()", "getElementsByName()", "getElementById()", "getElementByClass()"],
              correctAnswer: 2,
            },
            {
              id: 3,
              question: "How do you change the text content of an HTML element in JavaScript?",
              options: ["element.textContent", "element.innerText", "element.innerHTML", "All of the above"],
              correctAnswer: 3,
            },
            {
              id: 4,
              question: "Which event is triggered when a user clicks on an HTML element?",
              options: ["onmouseover", "onchange", "onclick", "onmouseclick"],
              correctAnswer: 2,
            },
            {
              id: 5,
              question: "How do you add a class to an HTML element using JavaScript?",
              options: [
                "element.className += 'new-class'",
                "element.classList.add('new-class')",
                "element.addClass('new-class')",
                "Both A and B",
              ],
              correctAnswer: 3,
            },
          ],
        },
      },
    ],
  },
  {
    id: "react-fundamentals",
    title: "React Fundamentals",
    description: "Learn the fundamentals of React, a JavaScript library for building user interfaces.",
    thumbnail: "https://rw46865x0j.ufs.sh/f/2Qpnhu1TY6sV7rZYAoQPlVktDLRxCe1QZpXIWvjyJ5F02Pob?height=400&width=600",
    category: "Web Development",
    duration: "10 weeks",
    level: "Intermediate",
    progress: 0,
    modules: [
      {
        id: 1,
        title: "Introduction to React",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        textContent: `
          <h2>Introduction to React</h2>
          <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.</p>
          
          <h3>Why React?</h3>
          <p>React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple.</p>
          
          <h3>React Components</h3>
          <p>Components are the building blocks of any React application. A component is a JavaScript class or function that optionally accepts inputs (called "props") and returns a React element that describes how a section of the UI should appear.</p>
          
          <h3>JSX</h3>
          <p>JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called "React elements".</p>
        `,
        quiz: {
          title: "Introduction to React Quiz",
          questions: [
            {
              id: 1,
              question: "What is React?",
              options: [
                "A JavaScript library for building user interfaces",
                "A programming language",
                "A database management system",
                "A server-side framework",
              ],
              correctAnswer: 0,
            },
            {
              id: 2,
              question: "Who maintains React?",
              options: ["Google", "Facebook", "Microsoft", "Twitter"],
              correctAnswer: 1,
            },
            {
              id: 3,
              question: "What is JSX?",
              options: [
                "A JavaScript extension",
                "A React component",
                "A syntax extension to JavaScript",
                "A database query language",
              ],
              correctAnswer: 2,
            },
            {
              id: 4,
              question: "What are React components?",
              options: ["Database tables", "CSS files", "Building blocks of a React application", "HTML elements"],
              correctAnswer: 2,
            },
            {
              id: 5,
              question: "What does JSX compile to?",
              options: ["HTML", "CSS", "React.createElement() calls", "JavaScript functions"],
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 2,
        title: "React State and Props",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        textContent: `
          <h2>React State and Props</h2>
          <p>State and props are two core concepts in React that manage and pass data between components.</p>
          
          <h3>Props</h3>
          <p>Props (short for "properties") are a way of passing data from parent to child components. Props are read-only and cannot be modified by the child component.</p>
          
          <h3>State</h3>
          <p>State is a JavaScript object that stores a component's dynamic data and determines the component's behavior. State is managed within the component and can be changed over time.</p>
          
          <h3>State vs Props</h3>
          <p>The key difference between state and props:</p>
          <ul>
            <li>Props are passed to the component (similar to function parameters)</li>
            <li>State is managed within the component (similar to variables declared within a function)</li>
          </ul>
        `,
        quiz: {
          title: "React State and Props Quiz",
          questions: [
            {
              id: 1,
              question: "What are props in React?",
              options: [
                "Internal data storage",
                "Data passed from parent to child components",
                "CSS properties",
                "HTML attributes",
              ],
              correctAnswer: 1,
            },
            {
              id: 2,
              question: "Can a child component modify its props?",
              options: ["Yes", "No", "Only if specified", "Only in class components"],
              correctAnswer: 1,
            },
            {
              id: 3,
              question: "What is state in React?",
              options: [
                "Data passed from parent to child",
                "A JavaScript object that stores component's dynamic data",
                "A CSS property",
                "A global variable",
              ],
              correctAnswer: 1,
            },
            {
              id: 4,
              question: "How do you update state in a class component?",
              options: ["this.state = newState", "this.setState()", "this.updateState()", "this.changeState()"],
              correctAnswer: 1,
            },
            {
              id: 5,
              question: "Which hook is used to add state to a functional component?",
              options: ["useEffect", "useState", "useContext", "useReducer"],
              correctAnswer: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: "python-for-data-science",
    title: "Python for Data Science",
    description: "Learn Python programming for data analysis and visualization.",
    thumbnail: "https://rw46865x0j.ufs.sh/f/2Qpnhu1TY6sVPdrmU60BdO39CRQ2vHeZlkS7qEh0nuFImoxg?height=400&width=600",
    category: "Data Science",
    duration: "12 weeks",
    level: "Beginner",
    progress: 0,
    modules: [
      {
        id: 1,
        title: "Python Basics",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        textContent: `
          <h2>Python Basics</h2>
          <p>Python is a high-level, interpreted programming language known for its readability and simplicity. It's widely used in data science, machine learning, web development, and more.</p>
          
          <h3>Variables and Data Types</h3>
          <p>Python has several built-in data types:</p>
          <ul>
            <li>Numeric: int, float, complex</li>
            <li>Sequence: list, tuple, range</li>
            <li>Mapping: dict</li>
            <li>Set: set, frozenset</li>
            <li>Boolean: bool</li>
            <li>Binary: bytes, bytearray, memoryview</li>
          </ul>
          
          <h3>Control Flow</h3>
          <p>Python uses indentation to define code blocks. Control flow statements include if, for, while, and more.</p>
          
          <h3>Functions</h3>
          <p>Functions in Python are defined using the def keyword. They can take arguments and return values.</p>
        `,
        quiz: {
          title: "Python Basics Quiz",
          questions: [
            {
              id: 1,
              question: "What is Python?",
              options: [
                "A snake species",
                "A high-level programming language",
                "A database management system",
                "A web browser",
              ],
              correctAnswer: 1,
            },
            {
              id: 2,
              question: "Which of the following is not a Python data type?",
              options: ["int", "float", "char", "bool"],
              correctAnswer: 2,
            },
            {
              id: 3,
              question: "How do you define a function in Python?",
              options: ["function myFunc():", "def myFunc():", "create myFunc():", "func myFunc():"],
              correctAnswer: 1,
            },
            {
              id: 4,
              question: "What does Python use to define code blocks?",
              options: ["Curly braces {}", "Semicolons ;", "Parentheses ()", "Indentation"],
              correctAnswer: 3,
            },
            {
              id: 5,
              question: "Which of the following is a mutable data type in Python?",
              options: ["tuple", "string", "list", "int"],
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 2,
        title: "NumPy and Pandas",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        textContent: `
          <h2>NumPy and Pandas</h2>
          <p>NumPy and Pandas are two essential libraries for data manipulation and analysis in Python.</p>
          
          <h3>NumPy</h3>
          <p>NumPy (Numerical Python) is a library for working with arrays. It provides support for large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions to operate on these arrays.</p>
          
          <h3>Pandas</h3>
          <p>Pandas is a library for data manipulation and analysis. It offers data structures and operations for manipulating numerical tables and time series.</p>
          
          <h3>Key Features</h3>
          <ul>
            <li>NumPy arrays: efficient storage and operations on large arrays</li>
            <li>Pandas DataFrame: 2D labeled data structure with columns of potentially different types</li>
            <li>Data cleaning and preparation</li>
            <li>Data filtering and transformation</li>
            <li>Time series analysis</li>
          </ul>
        `,
        quiz: {
          title: "NumPy and Pandas Quiz",
          questions: [
            {
              id: 1,
              question: "What is NumPy?",
              options: [
                "A web framework",
                "A library for working with arrays",
                "A database system",
                "A programming language",
              ],
              correctAnswer: 1,
            },
            {
              id: 2,
              question: "What is the main data structure in Pandas?",
              options: ["Array", "List", "DataFrame", "Dictionary"],
              correctAnswer: 2,
            },
            {
              id: 3,
              question: "How do you import NumPy in Python?",
              options: ["import numpy", "import np", "import numpy as np", "from numpy import *"],
              correctAnswer: 2,
            },
            {
              id: 4,
              question: "Which of the following is not a feature of Pandas?",
              options: ["Data cleaning", "Web scraping", "Time series analysis", "Data filtering"],
              correctAnswer: 1,
            },
            {
              id: 5,
              question: "What does a Pandas Series represent?",
              options: [
                "A 2D labeled data structure",
                "A 1D labeled array",
                "A 3D matrix",
                "A collection of functions",
              ],
              correctAnswer: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: "ui-ux-design-principles",
    title: "UI/UX Design Principles",
    description: "Learn the fundamental principles of user interface and user experience design.",
    thumbnail: "https://rw46865x0j.ufs.sh/f/2Qpnhu1TY6sVBm0Lokbc5dshzV01JKfeWU7lRYCkroqQjgyw?height=400&width=600",
    category: "Design",
    duration: "8 weeks",
    level: "Beginner",
    progress: 0,
    modules: [
      {
        id: 1,
        title: "Introduction to UI/UX Design",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        textContent: `
          <h2>Introduction to UI/UX Design</h2>
          <p>UI (User Interface) and UX (User Experience) design are crucial aspects of creating digital products that are both functional and enjoyable to use.</p>
          
          <h3>What is UI Design?</h3>
          <p>UI design focuses on the visual elements of a digital product. It includes the layout, typography, color schemes, buttons, icons, and all visual elements that users interact with.</p>
          
          <h3>What is UX Design?</h3>
          <p>UX design is concerned with the overall feel of the product. It includes aspects like usability, accessibility, and the pleasure users derive from using the product.</p>
          
          <h3>The Design Process</h3>
          <p>The design process typically includes:</p>
          <ul>
            <li>Research: Understanding users and their needs</li>
            <li>Wireframing: Creating a basic layout</li>
            <li>Prototyping: Building an interactive model</li>
            <li>Testing: Evaluating the design with users</li>
            <li>Implementation: Bringing the design to life</li>
          </ul>
        `,
        quiz: {
          title: "Introduction to UI/UX Design Quiz",
          questions: [
            {
              id: 1,
              question: "What does UI stand for?",
              options: ["User Interface", "User Interaction", "User Implementation", "User Integration"],
              correctAnswer: 0,
            },
            {
              id: 2,
              question: "What does UX stand for?",
              options: ["User Examination", "User Experience", "User Expansion", "User Extension"],
              correctAnswer: 1,
            },
            {
              id: 3,
              question: "Which of the following is NOT typically part of UI design?",
              options: ["Typography", "Color schemes", "User research", "Button design"],
              correctAnswer: 2,
            },
            {
              id: 4,
              question: "What is a wireframe in design?",
              options: ["A final design", "A basic layout of a design", "A 3D model", "A type of prototype"],
              correctAnswer: 1,
            },
            {
              id: 5,
              question: "Which of the following is a key principle of good UX design?",
              options: [
                "Using as many features as possible",
                "Making the interface visually complex",
                "Focusing on usability and accessibility",
                "Using the latest design trends regardless of user needs",
              ],
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 2,
        title: "Design Principles",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        textContent: `
          <h2>Design Principles</h2>
          <p>Design principles are guidelines that designers follow to create effective and aesthetically pleasing designs.</p>
          
          <h3>Balance</h3>
          <p>Balance is the distribution of visual weight in a design. It can be symmetrical, asymmetrical, or radial.</p>
          
          <h3>Contrast</h3>
          <p>Contrast is the difference between elements in a design. It helps create focus and hierarchy.</p>
          
          <h3>Alignment</h3>
          <p>Alignment is the placement of elements in relation to each other. Proper alignment creates order and organization.</p>
          
          <h3>Proximity</h3>
          <p>Proximity is the grouping of related elements. It helps users understand relationships between elements.</p>
          
          <h3>Repetition</h3>
          <p>Repetition is the reuse of elements throughout a design. It creates consistency and unity.</p>
        `,
        quiz: {
          title: "Design Principles Quiz",
          questions: [
            {
              id: 1,
              question: "What is balance in design?",
              options: [
                "The use of color in a design",
                "The distribution of visual weight in a design",
                "The size of elements in a design",
                "The number of elements in a design",
              ],
              correctAnswer: 1,
            },
            {
              id: 2,
              question: "What does contrast help create in a design?",
              options: ["Confusion", "Monotony", "Focus and hierarchy", "Symmetry"],
              correctAnswer: 2,
            },
            {
              id: 3,
              question: "What is proximity in design?",
              options: [
                "The distance between the user and the screen",
                "The grouping of related elements",
                "The size of elements",
                "The color of elements",
              ],
              correctAnswer: 1,
            },
            {
              id: 4,
              question: "What does repetition create in a design?",
              options: ["Boredom", "Confusion", "Consistency and unity", "Contrast"],
              correctAnswer: 2,
            },
            {
              id: 5,
              question: "Which of the following is NOT a type of balance in design?",
              options: ["Symmetrical", "Asymmetrical", "Radial", "Linear"],
              correctAnswer: 3,
            },
          ],
        },
      },
    ],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Learn to build mobile applications for iOS and Android platforms.",
    thumbnail: "https://rw46865x0j.ufs.sh/f/2Qpnhu1TY6sVbsT0UvaH7vhqOmbfFX8N6jQW0cTCisdu1Iy5?height=400&width=600",
    category: "Mobile Development",
    duration: "14 weeks",
    level: "Intermediate",
    progress: 0,
    modules: [
      {
        id: 1,
        title: "Introduction to Mobile Development",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        textContent: `
          <h2>Introduction to Mobile Development</h2>
          <p>Mobile app development is the process of creating software applications that run on mobile devices. These applications can be pre-installed or downloaded and installed by the user.</p>
          
          <h3>Mobile Platforms</h3>
          <p>The two dominant mobile platforms are:</p>
          <ul>
            <li>iOS: Developed by Apple for their devices</li>
            <li>Android: Developed by Google, used by various manufacturers</li>
          </ul>
          
          <h3>Development Approaches</h3>
          <p>There are several approaches to mobile app development:</p>
          <ul>
            <li>Native Development: Using platform-specific languages and tools</li>
            <li>Cross-Platform Development: Using frameworks that work on multiple platforms</li>
            <li>Hybrid Development: Combining web technologies with native capabilities</li>
          </ul>
          
          <h3>Key Considerations</h3>
          <p>When developing mobile apps, consider:</p>
          <ul>
            <li>User Experience: Mobile interfaces have unique requirements</li>
            <li>Performance: Mobile devices have limited resources</li>
            <li>Offline Functionality: Apps should work with intermittent connectivity</li>
            <li>Security: Protecting user data on mobile devices</li>
          </ul>
        `,
        quiz: {
          title: "Introduction to Mobile Development Quiz",
          questions: [
            {
              id: 1,
              question: "What are the two dominant mobile platforms?",
              options: ["iOS and Android", "Windows and macOS", "Linux and Unix", "Chrome OS and Firefox OS"],
              correctAnswer: 0,
            },
            {
              id: 2,
              question: "What is native mobile development?",
              options: [
                "Using web technologies for mobile apps",
                "Using platform-specific languages and tools",
                "Using a single codebase for multiple platforms",
                "Developing for indigenous communities",
              ],
              correctAnswer: 1,
            },
            {
              id: 3,
              question: "Which of the following is NOT a key consideration in mobile app development?",
              options: ["User Experience", "Performance", "Desktop compatibility", "Offline Functionality"],
              correctAnswer: 2,
            },
            {
              id: 4,
              question: "What is cross-platform development?",
              options: [
                "Developing for both iOS and Android using platform-specific tools",
                "Developing web applications",
                "Using frameworks that work on multiple platforms",
                "Developing for multiple versions of the same platform",
              ],
              correctAnswer: 2,
            },
            {
              id: 5,
              question: "Why is offline functionality important in mobile apps?",
              options: [
                "It's not important",
                "Mobile devices are always connected",
                "Mobile devices have intermittent connectivity",
                "To save battery life",
              ],
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 2,
        title: "React Native Fundamentals",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        textContent: `
          <h2>React Native Fundamentals</h2>
          <p>React Native is a popular framework for building mobile applications using JavaScript and React. It allows developers to create native apps for both iOS and Android from a single codebase.</p>
          
          <h3>Core Concepts</h3>
          <p>React Native is based on React, but instead of targeting the browser, it targets mobile platforms. Key concepts include:</p>
          <ul>
            <li>Components: Building blocks of a React Native app</li>
            <li>Props: Pass data to components</li>
            <li>State: Manage component data</li>
            <li>JSX: Syntax extension for JavaScript</li>
          </ul>
          
          <h3>Native Components</h3>
          <p>React Native provides a set of built-in components that map to native UI elements:</p>
          <ul>
            <li>View: Container similar to a div</li>
            <li>Text: Display text</li>
            <li>Image: Display images</li>
            <li>ScrollView: Scrollable container</li>
            <li>TextInput: Input field for text</li>
          </ul>
          
          <h3>Styling</h3>
          <p>React Native uses a subset of CSS for styling, with some differences due to the mobile environment. Styles are typically defined using JavaScript objects.</p>
        `,
        quiz: {
          title: "React Native Fundamentals Quiz",
          questions: [
            {
              id: 1,
              question: "What is React Native?",
              options: [
                "A programming language",
                "A framework for building mobile applications",
                "A database management system",
                "An operating system",
              ],
              correctAnswer: 1,
            },
            {
              id: 2,
              question: "What language is primarily used in React Native development?",
              options: ["Swift", "Java", "JavaScript", "Kotlin"],
              correctAnswer: 2,
            },
            {
              id: 3,
              question: "Which of the following is NOT a core concept in React Native?",
              options: ["Components", "Props", "State", "SQL Queries"],
              correctAnswer: 3,
            },
            {
              id: 4,
              question: "What is the equivalent of a div in React Native?",
              options: ["Div", "Container", "View", "Box"],
              correctAnswer: 2,
            },
            {
              id: 5,
              question: "How are styles typically defined in React Native?",
              options: ["Using CSS files", "Using HTML style attributes", "Using JavaScript objects", "Using XML"],
              correctAnswer: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: "java-programming-fundamentals",
    title: "Java Programming Fundamentals",
    description: "A comprehensive course to learn the basics of Java programming, from variables to object-oriented concepts.",
    thumbnail: "https://rw46865x0j.ufs.sh/f/2Qpnhu1TY6sVes6eA2TC68UE02oQFbvAOwTyPp1ix35JBu4k?height=400&width=600", // Placeholder thumbnail URL
    category: "Programming",
    duration: "10 weeks",
    level: "Beginner",
    progress: 0,
    modules: [
      {
        id: 1,
        title: "Introduction to Java and Setting Up Your Environment",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Placeholder video URL
        textContent: `
          <h2>Introduction to Java</h2>
          <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It's a popular choice for enterprise-level applications, Android development, and more.</p>

          <h3>What is Java?</h3>
          <p>Java is known for its "Write Once, Run Anywhere" (WORA) principle, meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.</p>

          <h3>Key Features of Java</h3>
          <ul>
            <li>Object-Oriented: Based on the concept of objects.</li>
            <li>Platform Independent: Runs on various operating systems.</li>
            <li>Simple: Relatively easy to learn compared to some other languages.</li>
            <li>Secure: Designed with security in mind.</li>
            <li>Robust: Has strong memory management and error handling.</li>
            <li>Multithreaded: Can perform multiple tasks concurrently.</li>
          </ul>

          <h3>Setting Up Your Development Environment</h3>
          <p>To start programming in Java, you need a Java Development Kit (JDK) and an Integrated Development Environment (IDE).</p>

          <h4>JDK Installation</h4>
          <p>Download and install the latest JDK from Oracle's website or use an open-source alternative like OpenJDK. The JDK includes the Java Runtime Environment (JRE) and development tools like the compiler (<code>javac</code>).</p>

          <h4>IDE Installation</h4>
          <p>Popular Java IDEs include:</p>
          <ul>
            <li>Eclipse</li>
            <li>IntelliJ IDEA (Community or Ultimate Edition)</li>
            <li>NetBeans</li>
          </ul>
          <p>Install an IDE of your choice. These provide features like code editing, debugging, and project management.</p>
        `,
        quiz: {
          title: "Introduction to Java Quiz",
          questions: [
            {
              id: 1,
              question: "What is the main principle of Java?",
              options: ["Write Many, Run Many", "Write Once, Run Anywhere", "Write Once, Compile Once", "Write Anywhere, Run Anywhere"],
              correctAnswer: 1,
            },
            {
              id: 2,
              question: "Which of the following is NOT a key feature of Java?",
              options: ["Platform Dependent", "Object-Oriented", "Secure", "Multithreaded"],
              correctAnswer: 0,
            },
            {
              id: 3,
              question: "What does JDK stand for?",
              options: ["Java Development Kit", "Java Deployment Kit", "Java Design Kit", "Java Data Kit"],
              correctAnswer: 0,
            },
            {
              id: 4,
              question: "Which of these is a popular Java IDE?",
              options: ["Visual Studio Code", "Sublime Text", "Eclipse", "Atom"],
              correctAnswer: 2,
            },
            {
              id: 5,
              question: "What tool is used to compile Java code?",
              options: ["java", "javac", "jre", "jdk"],
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 2,
        title: "Variables, Data Types, and Operators",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Placeholder video URL
        textContent: `
          <h2>Variables and Data Types</h2>
          <p>In Java, variables are used to store data. Each variable has a data type that determines the type of data it can hold and the operations that can be performed on it.</p>

          <h3>Data Types</h3>
          <p>Java has two main categories of data types:</p>
          <ul>
            <li><strong>Primitive Data Types:</strong>
              <ul>
                <li><code>byte</code>: 8-bit integer</li>
                <li><code>short</code>: 16-bit integer</li>
                <li><code>int</code>: 32-bit integer</li>
                <li><code>long</code>: 64-bit integer</li>
                <li><code>float</code>: 32-bit floating-point</li>
                <li><code>double</code>: 64-bit floating-point</li>
                <li><code>boolean</code>: true or false</li>
                <li><code>char</code>: 16-bit Unicode character</li>
              </ul>
            </li>
            <li><strong>Non-Primitive (Reference) Data Types:</strong>
              <ul>
                <li><code>String</code>: Represents sequences of characters</li>
                <li>Arrays: Collections of elements of the same type</li>
                <li>Classes, Interfaces, etc.: User-defined types</li>
              </ul>
            </li>
          </ul>

          <h3>Declaring and Initializing Variables</h3>
          <p>To declare a variable, you specify its data type followed by the variable name:</p>
          <pre><code class="language-java">int age;</code></pre>
          <p>You can initialize a variable when you declare it:</p>
          <pre><code class="language-java">int age = 30;</code></pre>

          <h3>Operators</h3>
          <p>Operators are symbols that perform operations on variables and values. Some common operators include:</p>
          <ul>
            <li><strong>Arithmetic Operators:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code></li>
            <li><strong>Assignment Operators:</strong> <code>=</code>, <code>+=</code>, <code>-=</code>, etc.</li>
            <li><strong>Comparison Operators:</strong> <code>==</code>, <code>!=</code>, <code>></code>, <code><</code>, <code>>=</code>, <code><=</code></li>
            <li><strong>Logical Operators:</strong> <code>&&</code> (AND), <code>||</code> (OR), <code>!</code> (NOT)</li>
            <li><strong>Increment/Decrement Operators:</strong> <code>++</code>, <code>--</code></li>
          </ul>
        `,
        quiz: {
          title: "Variables, Data Types, and Operators Quiz",
          questions: [
            {
              id: 1,
              question: "Which of the following is a primitive data type in Java?",
              options: ["String", "Array", "int", "Class"],
              correctAnswer: 2,
            },
            {
              id: 2,
              question: "What is the correct way to declare an integer variable named 'count'?",
              options: ["count int;", "int count;", "variable count int;", "declare int count;"],
              correctAnswer: 1,
            },
            {
              id: 3,
              question: "Which operator is used for checking equality in Java?",
              options: ["=", "==", "!=", "=>"],
              correctAnswer: 1,
            },
            {
              id: 4,
              question: "What does the '%' operator do?",
              options: ["Multiplication", "Division", "Modulo (remainder)", "Exponentiation"],
              correctAnswer: 2,
            },
            {
              id: 5,
              question: "Which logical operator represents 'OR'?",
              options: ["&&", "||", "!", "&"],
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 3,
        title: "Control Flow: Conditional Statements and Loops",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Placeholder video URL
        textContent: `
          <h2>Control Flow</h2>
          <p>Control flow statements in Java determine the order in which instructions are executed. They allow you to make decisions and repeat blocks of code.</p>

          <h3>Conditional Statements</h3>
          <p>Conditional statements execute a block of code only if a certain condition is met.</p>

          <h4><code>if</code> statement</h4>
          <p>Executes a block of code if a condition is true.</p>
          <pre><code class="language-java">if (condition) {
    // code to execute if condition is true
}</code></pre>

          <h4><code>if-else</code> statement</h4>
          <p>Executes one block if the condition is true and another if it's false.</p>
          <pre><code class="language-java">if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}</code></pre>

          <h4><code>if-else if-else</code> statement</h4>
          <p>Allows for multiple conditions to be checked.</p>
          <pre><code class="language-java">if (condition1) {
    // code for condition1
} else if (condition2) {
    // code for condition2
} else {
    // code if none of the above conditions are met
}</code></pre>

          <h4><code>switch</code> statement</h4>
          <p>Provides an alternative to multiple <code>if-else if</code> statements when checking a single variable against multiple values.</p>
          <pre><code class="language-java">switch (expression) {
    case value1:
        // code for value1
        break;
    case value2:
        // code for value2
        break;
    default:
        // code if no case matches
}</code></pre>

          <h3>Loops</h3>
          <p>Loops allow you to execute a block of code repeatedly.</p>

          <h4><code>for</code> loop</h4>
          <p>Used when you know the number of iterations beforehand.</p>
          <pre><code class="language-java">for (initialization; condition; increment/decrement) {
    // code to repeat
}</code></pre>

          <h4><code>while</code> loop</h4>
          <p>Executes a block of code as long as a condition is true.</p>
          <pre><code class="language-java">while (condition) {
    // code to repeat
}</code></pre>

          <h4><code>do-while</code> loop</h4>
          <p>Similar to a <code>while</code> loop, but the code block is executed at least once before the condition is checked.</p>
          <pre><code class="language-java">do {
    // code to repeat
} while (condition);</code></pre>
        `,
        quiz: {
          title: "Control Flow Quiz",
          questions: [
            {
              id: 1,
              question: "Which statement is used to execute code only if a condition is true?",
              options: ["loop", "switch", "if", "while"],
              correctAnswer: 2,
            },
            {
              id: 2,
              question: "Which loop is guaranteed to execute its block at least once?",
              options: ["for loop", "while loop", "do-while loop", "for-each loop"],
              correctAnswer: 2,
            },
            {
              id: 3,
              question: "Which statement is an alternative to multiple if-else if statements?",
              options: ["for", "while", "switch", "do-while"],
              correctAnswer: 2,
            },
            {
              id: 4,
              question: "What keyword is used to exit a switch case?",
              options: ["exit", "return", "break", "continue"],
              correctAnswer: 2,
            },
            {
              id: 5,
              question: "When would you typically use a for loop?",
              options: ["When the number of iterations is unknown", "When the number of iterations is known", "When you need to execute the code at least once", "To make a decision"],
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 4,
        title: "Object-Oriented Programming (OOP) Concepts",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Placeholder video URL
        textContent: `
          <h2>Object-Oriented Programming</h2>
          <p>Java is a strongly object-oriented language. OOP is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code in the form of procedures (often known as methods).</p>

          <h3>Key OOP Concepts</h3>

          <h4>1. Classes and Objects</h4>
          <p>A <strong>Class</strong> is a blueprint or template for creating objects. An <strong>Object</strong> is an instance of a class.</p>
          <pre><code class="language-java">// Class definition
class Car {
    // Attributes
    String model;
    int year;

    // Method
    void startEngine() {
        System.out.println("Engine starting...");
    }
}

// Creating an object
Car myCar = new Car();
myCar.model = "Sedan";
myCar.year = 2023;
myCar.startEngine();</code></pre>

          <h4>2. Encapsulation</h4>
          <p>Bundling data (attributes) and methods that operate on the data into a single unit (class). It also restricts direct access to some components of an object, which can be controlled by access specifiers (<code>public</code>, <code>private</code>, <code>protected</code>).</p>
          <pre><code class="language-java">class Person {
    private String name; // private attribute

    // Public getter method
    public String getName() {
        return name;
    }

    // Public setter method
    public void setName(String name) {
        this.name = name;
    }
}</code></pre>

          <h4>3. Inheritance</h4>
          <p>A mechanism where one class (subclass or derived class) inherits the properties and behaviors of another class (superclass or base class). This promotes code reusability.</p>
          <pre><code class="language-java">class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal { // Dog inherits from Animal
    void bark() {
        System.out.println("Woof!");
    }
}</code></pre>

          <h4>4. Polymorphism</h4>
          <p>The ability of an object to take on many forms. It allows you to perform a single action in different ways. Polymorphism in Java is achieved through method overloading (same method name, different parameters) and method overriding (same method name and parameters in superclass and subclass).</p>
          <pre><code class="language-java">class Shape {
    void draw() {
        System.out.println("Drawing a shape.");
    }
}

class Circle extends Shape {
    @Override // Method overriding
    void draw() {
        System.out.println("Drawing a circle.");
    }
}</code></pre>

          <h4>5. Abstraction</h4>
          <p>Hiding the complex implementation details and showing only the essential features of an object. Achieved using abstract classes and interfaces.</p>
          <pre><code class="language-java">// Abstract class
abstract class Vehicle {
    abstract void engine(); // Abstract method

    void honk() {
        System.out.println("Beep beep!");
    }
}

class Car extends Vehicle {
    @Override
    void engine() {
        System.out.println("Car engine starts.");
    }
}</code></pre>
        `,
        quiz: {
          title: "OOP Concepts Quiz",
          questions: [
            {
              id: 1,
              question: "What is a blueprint for creating objects?",
              options: ["Object", "Method", "Class", "Attribute"],
              correctAnswer: 2,
            },
            {
              id: 2,
              question: "Which OOP concept involves bundling data and methods together?",
              options: ["Inheritance", "Polymorphism", "Abstraction", "Encapsulation"],
              correctAnswer: 3,
            },
            {
              id: 3,
              question: "What allows a subclass to inherit properties from a superclass?",
              options: ["Encapsulation", "Polymorphism", "Inheritance", "Abstraction"],
              correctAnswer: 2,
            },
            {
              id: 4,
              question: "Which concept means 'many forms' and allows a single action in different ways?",
              options: ["Abstraction", "Inheritance", "Encapsulation", "Polymorphism"],
              correctAnswer: 3,
            },
            {
              id: 5,
              question: "What is the purpose of abstraction?",
              options: [
                "To bundle data and methods",
                "To hide implementation details and show essential features",
                "To inherit properties from a superclass",
                "To allow objects to take on many forms",
              ],
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 5,
        title: "Arrays and Collections",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Placeholder video URL
        textContent: `
          <h2>Arrays and Collections</h2>
          <p>Arrays and Collections are used to store and manipulate groups of related data in Java.</p>

          <h3>Arrays</h3>
          <p>An array is a container object that holds a fixed number of values of a single type. The length of an array is established when the array is created.</p>
          <pre><code class="language-java">// Declaring an array of integers
int[] numbers;

// Initializing an array with a fixed size
numbers = new int[5];

// Declaring and initializing with values
String[] names = {"Alice", "Bob", "Charlie"};

// Accessing array elements (using index)
String firstPerson = names[0]; // "Alice"

// Modifying array elements
numbers[0] = 10;</code></pre>

          <h3>Java Collections Framework</h3>
          <p>The Java Collections Framework provides a unified architecture for representing and manipulating collections, allowing them to be manipulated independently of the details of their representation. It includes interfaces and classes for various collection types.</p>

          <h4>Key Interfaces</h4>
          <ul>
            <li><code>Collection</code>: The root interface of the collection hierarchy.</li>
            <li><code>List</code>: Ordered collection (sequence). Allows duplicate elements. (e.g., <code>ArrayList</code>, <code>LinkedList</code>)</li>
            <li><code>Set</code>: Collection that cannot contain duplicate elements. (e.g., <code>HashSet</code>, <code>TreeSet</code>)</li>
            <li><code>Map</code>: Object that maps keys to values. Keys are unique. (e.g., <code>HashMap</code>, <code>TreeMap</code>)</li>
          </ul>

          <h4>Commonly Used Classes</h4>
          <ul>
            <li><code>ArrayList</code>: Resizable array implementation of the List interface.</li>
            <li><code>LinkedList</code>: Doubly-linked list implementation of the List interface.</li>
            <li><code>HashSet</code>: Hash table implementation of the Set interface.</li>
            <li><code>HashMap</code>: Hash table implementation of the Map interface.</li>
          </ul>

          <h3>Working with Collections</h3>
          <pre><code class="language-java">import java.util.ArrayList;
import java.util.List;

public class CollectionsExample {
    public static void main(String[] args) {
        // Creating an ArrayList
        List&lt;String&gt; fruits = new ArrayList&lt;&gt;();

        // Adding elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");

        // Accessing elements
        String firstFruit = fruits.get(0); // "Apple"

        // Iterating through a list
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}</code></pre>
        `,
        quiz: {
          title: "Arrays and Collections Quiz",
          questions: [
            {
              id: 1,
              question: "What is the primary characteristic of a Java array?",
              options: ["Its size can change dynamically", "It holds elements of different data types", "It holds a fixed number of values of a single type", "It can only store primitive data types"],
              correctAnswer: 2,
            },
            {
              id: 2,
              question: "Which interface represents an ordered collection that allows duplicate elements?",
              options: ["Set", "Map", "List", "Collection"],
              correctAnswer: 2,
            },
            {
              id: 3,
              question: "Which of these is a commonly used implementation of the List interface?",
              options: ["HashSet", "HashMap", "ArrayList", "TreeMap"],
              correctAnswer: 2,
            },
            {
              id: 4,
              question: "In a Map, what is used to access values?",
              options: ["Index", "Value", "Key", "Order"],
              correctAnswer: 2,
            },
            {
              id: 5,
              question: "Which interface ensures that a collection does not contain duplicate elements?",
              options: ["List", "Set", "Map", "Collection"],
              correctAnswer: 1,
            },
          ],
        },
      },
    ],
  }
]
