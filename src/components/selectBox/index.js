import React, { Component } from 'react'
import './style.css'
export default class SelectBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            values: []
        }
    }
    componentDidMount(){
        this.setState({
            values: this.props.options
        });
    }
  render() {
    return (
      <div className="selectBox">
        <label for="miSelect">{this.props.label}</label>
        <select id="miSelect">
            <option>
            </option>
            {
                this.state.values.map((v, i) => {
                    return(
                        <option id={i}>{v}</option>
                    )
                })
            }
        </select>
      </div>
    )
  }
}
