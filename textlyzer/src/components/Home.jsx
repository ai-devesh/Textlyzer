import React, { useState } from 'react';

export default function Home(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleToUppercase = () => {
        if(text === "") {
        } else {
            props.showAlert("success", "Your text is converted to uppercase !")
            let newText = text.toUpperCase();
            setText(newText);
        }
    }
    
    
    const handleToLowercase = () => {
        props.showAlert("success", "Your text is converted to lowercase !")
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    
    const handleToRemoveExtraSpaces = () => {
        props.showAlert("success", "Your text is now extra space free !")
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
    }
    
    const handleToCleartext = () => {
        props.showAlert("success", "Your text is cleared !")
        setText("")
    }
    
    const handleToCopytext = () => {
        props.showAlert("success", "Your text is copied to clipboard !")
        navigator.clipboard.writeText(text);
    }
    const handleToTitlecase = () => {
        props.showAlert("success", "Your text is converted to titlecase !")
        let newText = text.toLowerCase().split(" ");
        let finalText = ""
        for(let i=0; i<newText.length; i++) {
            finalText += newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        let pakkaFinalText = finalText.split(/(?=[A-Z])/);
        setText(pakkaFinalText.join(" "));
    }
    
    const handleToSentencecase = () => {
        props.showAlert("success", "Your text is converted to uppercase !")
        let newText = text.toLowerCase().split(".");
        let finalText = ""
        for(let i=0; i<newText.length; i++) {
            finalText += newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        let pakkaFinalText = finalText.split(".");
        setText(pakkaFinalText.join(". "));
    }

    return (
        <div className={`container`}>
            <div className="mb-3">
                <h1 className={`my-4 text-${props.mode==='dark'?'light':'dark'}`}>Enter your text below to analyze :-</h1>
                <textarea value={text} onChange={handleOnChange} className={`bg-${props.mode} text-${props.mode==='dark'?'light':'dark'} form-control mb-3`}id="myBox" rows="10"></textarea>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'primary'} my-1 mx-2`} onClick={handleToUppercase}>Convert To Uppercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'primary'} my-1 mx-2`} onClick={handleToLowercase}>Convert To Lowercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'primary'} my-1 mx-2`} onClick={handleToRemoveExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'primary'} my-1 mx-2`} onClick={handleToCleartext}>Clear Text</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'primary'} my-1 mx-2`} onClick={handleToCopytext}>Copy Text</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'primary'} my-1 mx-2`} onClick={handleToTitlecase}>Convert To Titlecase<span className="badge bg-success mx-2">Exclusive</span></button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'primary'} my-1 mx-2`} onClick={handleToSentencecase}>Convert To Sentence Case<span className="badge bg-success mx-2">Exclusive</span></button>
            </div>
            <div className={`d-flex align-items-center text-${props.mode==='dark'?'light':'dark'}`}>
                <h2>Your text summary :</h2>
                <p className="my-auto fs-4 mx-3">{text.split(/\s+/).filter(item => item.length!==0).length} words | {text.length} characters | Time to read - {0.004 * text.split("/\s+/").filter(item => item.length!==0).length} min</p>
            </div>
            <div className={`my-2 text-${props.mode==='dark'?'light':'dark'}`}>
                <h3>Preview :-</h3>
                <p>{text.length===0?"Nothing to preview":text}</p>
            </div>
        </div>
    )
} 