

class Reservation extends Component {
	constructor(props) {
    super(props);
		this.state = {value: 'pending'};
  }

	toggleStatus(event){
		var value = event.target.value;

		alert("status toggle working");
	}

  render() {
    return (

				<div style="width:250px;margin-top:100px;margin-left:150px">
					<h3 style="margin-left:10px;padding-top:10px;">Task Name</h3>
					<hr/>
					<p style="margin-left:10px;"> Brief Description about task
								hfdghdrgfdgdsrgdsfgsdfgrdfdgretre ftgretretretertetertreterterv retfsdgfdsgdrdsfgsdfdgerdtret
					</p>
					<input type="button" value="edit" style="float:right;margin-right:10px;background-color:darkgray;color:white;height:30px;width:80px;border-radius:30px;border-style:none;"/>
					<input type="button" value="delete" style="float:right;margin-right:10px;background-color:darkgray;color:white;height:30px;width:80px;border-radius:30px;border-style:none;"/>
					<br/><br/>
					<input onClick={this.toggleStatus} type="button" value={this.state.value} style="display:block;width:250px;background-color:orange;color:white;"/>
				</div>

    );
  }
}

render(<Reservation/>);
