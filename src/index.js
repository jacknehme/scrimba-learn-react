import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
function App() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
        fontSize: 30
    };

    if (hours < 12) {
        timeOfDay = 'morning';
        styles.color = "#04756F";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'afternoon';
        styles.color = "#2E0927";
    } else {
        timeOfDay = 'night';
        styles.color = "#D90000";
    }



    return (
        <h1 style={styles}>Good {timeOfDay}!</h1>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
