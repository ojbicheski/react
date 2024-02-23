const rootElement = document.getElementById('root');

// const element = document.createElement('div');
// element.textContent = 'Hello World';
// element.className = 'container';
// rootElement.appendChild(element);

// React element
// const element = React.createElement(
//   'div',
//   {
//     className: 'container',
//   },
//   'Hello World'
// );

// Note: this structure is simplified
// const element = {
//   type: 'div',
//   props: {
//     className: 'container',
//     children: 'Hello World',
//   },
// };

// Babel
// const element = <div className="container">Hello World</div>;

// JSX
// Embedding Expressions in JSX
const person = { 
  first: 'Joe', 
  last: 'Doe' 
};

// const element = (
//   <div className="container">
//     Hello {person.first} {person.last}
//   </div>  
// );

const logo = {
  name: 'React Logo',
  title: 'React Logo',
  path: './react-logo.png',
};

// const element = (
//   <>
//     <div className="container">
//       Hello {person.first} {person.last}
//     </div>  
//     <img src={logo.path} alt={logo.name} title={logo.title} />
//   </>
// );

// ReactDOM.createRoot(rootElement).render(element);

// Virutal DOM
// const root = ReactDOM.createRoot(rootElement);

// function renderElement() {

//   const element = (
//     <div className="post">
//       <h1>My First Blog Post</h1>
//       <div>Author: Mark Twain</div>
//       <div>Published: {new Date().toLocaleTimeString()}</div>
//       <p>
//         I am new to blogging and this is my first post. You should expect a
//         lot of great things from me.
//       </p>
//     </div>
//   );

//   root.render(element);
// }

// setInterval(renderElement, 1000);

// Components
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
  return (
    <div>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
    </div>
  );
}

class HelloWorld extends React.Component {
  render() {
    return <div className="container">Hello Class Component</div>;
  }
}