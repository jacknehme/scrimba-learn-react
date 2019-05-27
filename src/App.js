import React from 'react';
// import logo from './logo.svg';
import './App.css';

/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/

// import React from "react"
// import ReactDOM from "react-dom"

// #1
class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="Jack"/>
        <Greeting />
      </div>
    )
  }
}

// #2
class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }
}

// #3
class Greeting extends React.Component {

  timeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 12) {
      return "morning";
    } else if (hours >= 12 && hours < 17) {
      return "afternoon";
    } else {
      return "night";
    }
  }

  render() {
    return <h1>Good {this.timeOfDay()} to you, sir or madam!</h1>
  }
}
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
