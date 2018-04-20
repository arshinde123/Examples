//1st file

function hello(){
  console.log('testing');
}
export default hello;

//2nd file
import {display_message} from './MessageModule.js'
display_message()
