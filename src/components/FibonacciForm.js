import React, { Component } from 'react';
import { getOrdinal } from './StringUtils'

class FibonacciForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValue: null,
            result: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({formValue: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        this.props.client.post('', { query: `
        {
            result: fibonacci(int: ${this.state.formValue})
        }
        `}).then(result => {
            this.setState({result: result.data.data.result})
        });

      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Fibonacci:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            {this.state.result != null ? <p>The {getOrdinal(this.state.formValue)} fibonacci number is {this.state.result}</p> : ""} 
          </form>
        );
      }
}

export default FibonacciForm;