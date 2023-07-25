import './App.css';

function MyButton(){
  return(
    <button>
        submit
    </button>
  );
}

function MyLabel(){
  return(
    <label for="name">Name</label>
  )
}

function MyInput(){
  return(
    <input id='name' placeholder='name'></input>
  )
}
export default function App() {
  return (
    <div className="App">
      <MyLabel/>
      <MyInput/>
      <MyButton/>
    </div>
  );
}