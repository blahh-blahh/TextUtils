import React from "react";
import { useState } from 'react';

export default function TextForm(props) {
    const [text, setText]= useState('');
    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase","Yay");
    }

    const handleLowClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase","Yay");
    }

    const handleExSpClick=()=>{
      let newText= text.replace(/\s+/g,' ');
      setText(newText);
      props.showAlert("Removed Extra Spaces","Yay");
    }

    const handleCopyClick=()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Text has been copied","Yay");
    }

    const handleClearClick=()=>{
      setText("");
      props.showAlert("Cleared Text","Yay");
    }

    const handleChange=(event)=>{
        setText(event.target.value)
    }

  return (
    <>
    <div className="container my-3" style={{color:(props.mode=='light'?'black':'white')}}>
      <h1>{props.heading}</h1>
      <div className="mb-3 my-3">
        <textarea
          className="form-control"
          onChange={handleChange}
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          style={{color:(props.mode=='light'?'black':'white'), backgroundColor:(props.mode=='light'?'white':'grey')}}
        ></textarea>
      </div>
      <button className="btn  btn-dark mx-3" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn  btn-dark mx-3 my-3" onClick={handleLowClick} >Convert to Lowercase</button>
      <button className="btn  btn-dark mx-3 my-3" onClick={handleExSpClick}>Remove Extra Spaces</button>
      <button className="btn  btn-dark mx-3 my-3" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn  btn-dark mx-3 my-3" onClick={handleClearClick}>Clear Text</button>
    </div>

    <div className="container my-3" style={{color:(props.mode=='light'?'black':'white')}}>
        <h2>Text Summary here:</h2>
        <p>{text.length>0?(text.split(/\s+/).length):"0"} words and {text.length} characters</p>
        <p>You need {text.length>0?(text.split(" ").length*0.008):"0"} minutes to read the text</p>
        <h2>Text Preview:</h2>
        <p>{text.length>0?text:"Enter text in the above given box to preview"}</p>
    </div>
    </>
  );
}
