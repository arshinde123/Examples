import { h, render, Component } from 'preact';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
		if(this.state.value == ""){
			event.preventDefault();
		}

		alert('A name was submitted: ' + this.state.value);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="example.com">
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} {this.state.value === "pending" ? style="background-color:orange;" : style="background-color:green;"}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

render(<NameForm/>,document.body);
