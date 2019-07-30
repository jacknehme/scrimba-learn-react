// import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import todosData from './todosData';

// lesson 41 - React Forms Part 1
// React Docs about Forms: https://reactjs.org/docs/forms.html
// Formik - library for react forms https://github.com/jaredpalmer/formik
class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      isFriendly: true,
      gender: '',
      favColor: 'blue'
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      this.setState({
        [name]: checked
      })
    } else {
      this.setState({
        [name]: value
      })
    }

  }

  handleSubmit(event){
    event.preventDefault();
    console.log(event);

  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First Name"
          onChange={this.handleChange} />
        <br />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="Last Name"
          onChange={this.handleChange} />
        <br />


        <textarea 
          value={"Some default value"}
          onChange={this.handleChange} />
        <br />

        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          /> Is Friendly?
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === 'male'}
            onChange={this.handleChange}
          /> Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === 'female'}
            onChange={this.handleChange}
          /> Female
        </label>
        <br />

        <label>Favorite Color:</label> 
        <select 
          name="favColor"
          value={this.state.favColor}
          onChange={this.handleChange}>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </select>

        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2>You are {this.state.gender}</h2>
        <h2>Your favorite color is {this.state.favColor}</h2>
        <button >Submit</button>
      </form>
    )
  }

}


// // lesson 40 - Fetching data from an API with React
// // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// // https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
// // https://swapi.co/
// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       loading: false,
//       character: {}
//     };
//   }

//   componentDidMount(){
//     this.setState({ loading: true })

//     fetch('https://swapi.co/api/people/1')
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           loading: false,
//           character: data
//         })
//         console.log(data)
//       })
//   }

//   render(){
//     const text = this.state.loading ? 'Loading...' : this.state.character.name;
//     return (
//       <div>
//         <p>{text}</p>
//       </div>
//     )
//   }
// }

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: false
//     }
//     // this.handleClick = this.handleClick.bind(this); <- if using 'function' type method
//   }

//   handleClick = () => {
//     this.setState(prevState => {
//       return {
//         isLoggedIn: !prevState.isLoggedIn
//       }
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.isLoggedIn ?  "Logged in" : "Logged out" }</h1>
//         <button onClick={this.handleClick}>{this.state.isLoggedIn ? 'Log out' : 'Log in'}</button>
//       </div>
//     )
//   }

// }


// import Conditional from './components/Conditional';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoading: true
//     }
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading: false
//       })
//     }, 1500)
//   }

//   render() {
//     return (
//           <div>
//                 {this.state.isLoading ? 
//                 <h1>Loading...</h1> :
//                 <Conditional />}
//             </div>
//     )
//   }
// }

// lesson 39 - the last of the todo exercises
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: todosData
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(id) {
//     this.setState( prevState => {

//       const updatedArray = prevState.todos.map( x => {
//         if( x.id === id){
//           x.completed = !x.completed;
//         }
//         return x;
//       });

//       return {
//         todos: updatedArray 
//       }

//     })
//   }

//   render() {
//     const todoItems = this.state.todos.map(item => <TodoItem key={item.id} handleChange={this.handleChange} item={item} />)
//     return (
//       <div className="todo-list">
//         {todoItems}
//       </div>
//     )
//   }

// }

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
