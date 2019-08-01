import React, { Component } from "react"
import FormComponent from './FormComponent'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(`First Name: ${this.state.firstName}\nLast Name: ${this.state.lastName}\nAge: ${this.state.age}\nGender: ${this.state.gender}\nLocation: ${this.state.destination}\nDietary restrictions: ${this.state.vegetarian ? 'Vegetarian, ' : ''}${this.state.lactoseFree ? 'Lactose Free, ' : ''}${this.state.kosher ? 'Kosher' : ''}`)
    }

    render() {
        return (<FormComponent
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            {...this.state}
        />)
    }
}

export default Form
