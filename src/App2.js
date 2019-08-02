import React, {Component} from 'react';

import Header from './Header2';
import MemeGenerator from './MemeGenerator'



class App extends Component{
    constructor(){
        super();
        this.state = {}
    }

    render(){
        return (
            <div>
                <Header/>
                <MemeGenerator/>
            </div>
        )
    }
}

export default App