import { useState } from "react";



export default function MyForm() {
    let [text, setText] = useState("Enter Text");

    function changeHandeller(event) {
        setText(event.target.value);
    }
    function clickUpHandeller() {
        let newText = text.toUpperCase();
        setText(newText)
    }
    function clickLwHandeller(){
        let newText=text.toLowerCase();
        setText(newText)
    }
    return (
      <div className="App-header">
        <h1>Enter text to convert into uppercase</h1>
        <textarea
            onChange={changeHandeller}
            rows="8"
            cols="50"
            value={text}
        ></textarea>
        <button onClick={clickUpHandeller} type="submit">
                toUpper
        </button>
        <button onClick={clickLwHandeller} type="submit">
                toLower
        </button>
      </div>    
    );
}