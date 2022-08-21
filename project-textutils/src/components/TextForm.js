import React, {useState} from 'react'; // {useState} is known as a hook
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);   // This will allow the text in the textarea to change as the text variable is set as something else
        props.showAlert("Converted to upper case", "success");
    }

    const handleLoClick = () => {
        console.log("Lower case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success");
    }
    
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text is cleared", "success");

    }

    const handleOnChange = (event) => { // event is passed as a parameter by default for any event that takes place
        console.log("On change");
        setText(event.target.value);    // This allows the text to be written from user input in addition to the text that is there in the state variable 'text'
    }

    // This is used to track the change in our component's state in terms of the change in text, this uses array destructuring
    const [text, setText] = useState("");
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

  return (
    <>
        <div className="container" style={{color: props.mode === "light" ? "black" : "white"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "light" ? "white" : "#c8c8c8", color: props.mode === "light" ? "black" : "white"}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>

        <div className="container my-5" style={{color: props.mode === "light" ? "black" : "white"}}>
            <h2>Your text summary</h2>
            <p>Number of words = {(text.split(" ")[text.split(" ").length - 1] !== "") ? text.split(" ").length : text.split(" ").length - 1} and characters = {text.length}</p>
            {/* Another way of handling the extra word count is by text.split(" ").filter((element) => {return element.length !== 0}).length  
                filter function checks whether an element should be put within the array based on the definition of the function */}
        </div>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string
};
