import React, {useState} from 'react'; // {useState} is known as a hook
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);   // This will allow the text in the textarea to change as the text variable is set as something else
    }

    const handleOnChange = (event) => { // event is passed as a parameter by default for any event that takes place
        console.log("On change");
        setText(event.target.value);    // This allows the text to be written from user input in addition to the text that is there in the state variable 'text'
    }

    const countWords = () => {
        setWordCount();
    }

    // This is used to track the change in our component's state in terms of the change in text, this uses array destructuring
    const [text, setText] = useState("Enter text here");
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

    const [numberOfWords, setWordCount] = useState("Number of words are = 0");

  return (
    <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary" onClick={countWords}>Count the Number of Words</button>
        </div>

        <div className="container">
            <h1>Your text summary</h1>
            <p>{numberOfWords}</p>
        </div>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string
};
