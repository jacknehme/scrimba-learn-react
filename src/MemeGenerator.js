import React, {Component} from 'react';

class MemeGenerator extends Component {
    constructor(){
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            meme: ''
        }
        this.getMeme = this.getMeme.bind(this)
    }

    getMeme(){
        const xhr = new XMLHttpRequest();
        const url = 'https://api.imgflip.com/get_memes';

        // xhr.open("GET", url);
        // xhr.send();

        // xhr.onreadystatechange = (event)=>{
        //     if(xhr.readyState === 4){
        //         this.setState({
        //             meme: xhr.response
        //         })
        //     }
        // }
        // return xhr.onreadystatechange()

        fetch(url).then((data)=> this.setState({
            meme: data.response
        }))
    }

    render(){
        this.getMeme();
        return (
            <div>
                <h1>Meme Generator</h1>
                {this.state.meme}
            </div>
        )
    }
}

export default MemeGenerator;