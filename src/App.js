import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoItem from './components/TodoItem';
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

function App(){
  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}


export default App;
