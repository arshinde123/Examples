

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
		this.state = {text: 'pending'};
		this.state = {status: true};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
		if(this.state.status === true){
			this.setState({text: 'completed'});
			this.state.status = !this.state.status;
		}
		else{
			this.setState({text: 'pending'});
			this.state.status = !this.state.status;
		}

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="submit" value="Submit" value={this.state.text}/>
				<br/>
			<label>{this.state.text}</label>
      </form>
    );
  }
}

render(<NameForm/>);
