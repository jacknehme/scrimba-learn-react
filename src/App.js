import React from 'react';
import logo from './logo.svg';
import './App.css';


import Joke from './components/Joke';

function App () {
  return (
    <div>
      <Joke 
        question={'Why did the chicken cross the road?'}
        punchLine={'To get to the other side!'}
      />
      <Joke 
        question={''}
        punchLine={'It’s hard to explain puns to kleptomaniacs because they always take things literally.'}
      />
      <Joke 
        question={'What is the hardest shape to get out of?'}
        punchLine={'A trap-azoid.'}
      />
      <Joke 
        question={'Why did the crab never share?'}
        punchLine={'Because he’s shellfish.'}
      />
      <Joke 
        question={''}
        punchLine={'Did you hear about the monkeys who shared an Amazon account? They were Prime mates.'}
      />

    </div>
  );
}



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
