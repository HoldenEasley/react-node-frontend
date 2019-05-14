import React, { Component } from 'react';
import { getOrdinal } from './StringUtils'

class LucasForm extends Component {
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
            result: lucas(int: ${this.state.formValue})
        }
        `}).then(result => {
            this.setState({result: result.data.data.result})
        });

      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Lucas:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            {this.state.result != null ? <p>The {getOrdinal(this.state.formValue)} lucas number is {this.state.result}</p> : ""} 
          </form>
        );
      }
}

export default LucasForm;