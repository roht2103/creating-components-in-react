import './App.css';
import MyTextArea from './components/textForm'
let userInput;
function MyHeading(){
  return(
    <h1>this are components created in react</h1>
  )
}

function MyButton(){
  return(
    <button onClick={clickHandeller}>
        submit
    </button>
  );
}

function MyLabel(){
  return(
    <label htmlFor="name">Name</label>
  )
}

function MyInput(){
  return(
    <input id='name' placeholder='name' onChange={inputChangeHandeller}></input>
  )
}
function clickHandeller(){
  console.log(userInput);
}
function inputChangeHandeller(event) {
  userInput = event.target.value;
}
export default function App() {
  return (
    <div className="App-header">
      <MyHeading/>
      <MyLabel/>
      <MyInput/>
      <MyButton/>

      <MyTextArea/>
    </div>
  );
}