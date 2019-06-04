// import logo from './logo.svg';
import './App.css';


import React from 'react';
import TodoItem from './components/TodoItem';
import todosData from './todosData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState( prevState => {
      
      const updatedArray = prevState.todos.map( x => {
        if( x.id === id){
          x.completed = !x.completed;
        }
        return x;
      });

      return {
        todos: updatedArray 
      }

    })
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} handleChange={this.handleChange} item={item} />)
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }

}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => {
//       return  {
//         count: prevState.count + 1
//       }
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Change!</button>
//       </div>
//     )
//   }
// }

// // https://reactjs.org/docs/events.html#supported-events

// function App() {
//   return (
//     <div>
//       <img onMouseOver={()=>console.log('Hovered!')} src="https://www.fillmurray.com/200/100"/>
//       <br />
//       <br />
//       <button onClick={() => console.log('Click Button!')}>Click me!</button>
//     </div>
//   )
// }

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoginIn: true
//     };
//   }
//   render() {
//     let logged = this.state.isLoginIn ? 'in' : 'out';
//     return (
//       <div>
//         <h1>You are currently logged {logged}</h1>
//       </div>
//     )
//   }

// }

// Challenge:
// Given an incomplete class-based component without a constructor, 
// add a constructor and initialize state to fix the broken component.

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = { name: 'Jack', age: 99 };
//   }
//   render(){
//     return (
//         <div>
//             <h1>{this.state.name}</h1>
//             <h3>{this.state.age} years old</h3>
//         </div>
//     )    
//   }
// }


/*
Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug
*/
// import React from "react"
// import ReactDOM from "react-dom"
// #1
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Header username="Jack"/>
//         <Greeting />
//       </div>
//     )
//   }
// }

// // #2
// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <p>Welcome, {this.props.username}!</p>
//       </header>
//     )
//   }
// }

// // #3
// class Greeting extends React.Component {

//   timeOfDay() {
//     const date = new Date();
//     const hours = date.getHours();
//     if (hours < 12) {
//       return "morning";
//     } else if (hours >= 12 && hours < 17) {
//       return "afternoon";
//     } else {
//       return "night";
//     }
//   }

//   render() {
//     return <h1>Good {this.timeOfDay()} to you, sir or madam!</h1>
//   }
// }

// import TodoItem from './components/TodoItem';
// import todosData from './todosData';
// function App() {
//   const todoItemComponents = todosData.map(item => <TodoItem key={item.id} todo={item} />);
//   return (
//     <div>
//       {todoItemComponents}
//     </div>
//   );
// }

// import Product from './components/Product';
// import productsData from './vschoolProducts';
// function App () {
//   const productComponents = productsData.map( product => <Product key={product.id} product={product} />);
//   return (
//     <div>
//       {productComponents}
//     </div>
//   );
// }

// import Joke from './components/Joke';
// import jokesData from './jokesData';
// function App () {
//   const jokeComponents = jokesData.map( joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />);  

//   return (
//     <div>
//       {jokeComponents}
//     </div>
//   );
// }

// import Header from './components/Header';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';
// function App() {
//   return (
//     <div>
//       <Header />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// }

// import TodoItem from './components/TodoItem';
// function App(){
//   return (
//     <div className="todo-list">
//       <TodoItem />
//       <TodoItem />
//       <TodoItem />
//       <TodoItem />
//     </div>
//   )
// }




// import ContactCard from './components/ContactCard';

// function App() {
//   return (
//     <div className="contacts">
//       <ContactCard
//         contact={{
//           name: "Mr. Whiskerson",
//           imgUrl: "http://placekitten.com/300/200",
//           phone: "(212) 555-1234",
//           email: "mr.whiskerson@catnap.meow"
//         }}
//       />
//       <ContactCard
//         contact={{
//           name: "Fluffykins",
//           imgUrl: "http://placekitten.com/400/200",
//           phone: "(212) 555-2345",
//           email: "fluffy@me.com"
//         }}
//       />
//       <ContactCard
//         contact={{
//           name: "Destroyer",
//           imgUrl: "http://placekitten.com/400/300",
//           phone: "(212) 555-3456",
//           email: "destroyer@yahoo.com"
//         }}
//       />
//       <ContactCard
//         contact={{
//           name: "felix",
//           imgUrl: "http://placekitten.com/200/101",
//           phone: "(212) 555-4567",
//           email: "felix@hotmail.com"
//         }}
//       />
//     </div>
//   );
// }


export default App;
