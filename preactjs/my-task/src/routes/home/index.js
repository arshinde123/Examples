import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <h1>Welcome to Home</h1>
    );
  }
}
