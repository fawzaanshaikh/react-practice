import React, {useState} from 'react'; // {useState} is known as a hook
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);   // This will allow the text in the textarea to change as the text variable is set as something else
    }

    const handleLoClick = () => {
        console.log("Lower case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => { // event is passed as a parameter by default for any event that takes place
        console.log("On change");
        setText(event.target.value);    // This allows the text to be written from user input in addition to the text that is there in the state variable 'text'
    }

    // This is used to track the change in our component's state in terms of the change in text, this uses array destructuring
    const [text, setText] = useState("Enter text here");
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

  return (
    <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>

        <div className="container my-5">
            <h1>Your text summary</h1>
            <p>Number of words = {text.split(" ").length} and characters = {text.length}</p>
        </div>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string
};
