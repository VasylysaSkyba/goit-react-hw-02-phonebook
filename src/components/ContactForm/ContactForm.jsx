import { Component } from "react"

class ContactForm extends Component {
    state = {
        name: '',
        phone: '',
    }

    handleCangeForm = ({ target }) => {
        const {name, value} = target
        this.setState( { [name]: value})
    }


    render() {
        const { name, phone } = this.state
        return(
            <form>
                <input type="text" name="name" placeholder="Enter name" value={name} onChange></input>
                <input type="tel" name="phone" placeholder="Enter phone number" value={phone} onChange></input>
                <button type="submit">Add contact</button>
            </form>
        )
    }
}


export default ContactForm 



