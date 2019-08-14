import React, { Component } from 'react';

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImages: []
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount() {
        const url = 'https://api.imgflip.com/get_memes';
        fetch(url)
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data;
                this.setState({
                    allMemeImages: memes
                })
            })
    }

    changeHandler(event){
        const {name, value} = event.target;
        this.setState({ [name]: value })
    }

    submitHandler(event){
        event.preventDefault();
        const randomImage = this.state.allMemeImages[Math.floor(Math.random()*this.state.allMemeImages.length)]
        this.setState({ randomImage: randomImage.url })
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.submitHandler}>
                    <input 
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        placeholder="topText"
                        onChange={this.changeHandler}/>
                    <input 
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        placeholder="bottomText"
                        onChange={this.changeHandler}/>
                    <button type="submit">Generate</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;