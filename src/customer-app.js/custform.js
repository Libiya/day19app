import React, {Component} from 'react';
class Form extends Component {initialState = 
    {name: '',job: '',}state = this.initialStatehandleChange = (event) => 
    {const {name, value} = event.targetthis.setState({[name]: value,}
        )}submitForm = () => {
            this.props.handleSubmit(this.state);
            this.setState(this.initialState)}render()
             {const 
                { name, job } = this.state;
                return (
                <form>
                    <label htmlFor="custname">Name</label>
                    <input type="text"name="name"id="name"value={name}onChange={this.handleChange} />
                    <label htmlFor="city">City</label>
                    <input type="text"name="city"id="city"value={job}onChange={this.handleChange} />
                    <label htmlFor="phone">Phone</label>
                    <input type="text"name="phone"id="phone"value={name}onChange={this.handleChange} />
                    <label htmlFor="email">Email</label>
                    <input type="text"name="email"id="email"value={job}onChange={this.handleChange} />
                    <input type="button" value="Submit" onClick={this.submitForm} />

                    </form>);
                    }
                }
export default Form;