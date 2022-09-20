import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("enter text here");
  const [btntext, setBTnText] = useState("Enable dark mode");
  const [mode1, setmode] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const upclick = () => {
    console.log("upper function is called");
    let str = text.toUpperCase();
    setText(str);
    props.showError("convert to uppercase","success")

  };
  const lowclick = () => {
    console.log("upper function is called");
    let str = text.toLocaleLowerCase();
    setText(str);
    props.showError("convert to lowercase","success")
  };
  const cleartext = () => {
    console.log("upper function is called");
    let str = "";
    setText(str);
    props.showError("clear text","success")
  };
  const onchange = (event) => {
    console.log("change");
    setText(event.target.value);
  };
  const [bold1, setbold] = useState({
    fontWeight: "Normal",
  });
  const mode = (event) => {
    if (mode1.color == "black") {
      setmode({ color: "white", backgroundColor: "black" });
      setBTnText("Enable Light Mode");
    } else {
      setmode({ color: "black", backgroundColor: "white" });
      setBTnText("Enable dark Mode");
    }
  };
  const bold = () => {
    if (bold1.fontWeight == "Normal") {
      setbold({ fontWeight: "bold" });
      props.showError("convert to bold","success")
    } else {
      setbold({ fontWeight: "Normal" });
      props.showError("convert to normal","success")

    }
  };
  const handlecopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showError("copy to clipboard","success")

  };
  const count1 = () => {
    let l = text.split(" ").length;
    return l;
  };
  const spaceremove = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showError("remove extra spaces","success")

  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label value={text} className="form-label">Example textarea</label> */}
          <textarea
            value={text}
            onChange={onchange}
            className="form-control"
            id="mybox"
            rows="8"
            style={Object.assign({}, bold1, mode1, {
              backgroundColor: props.mode === "dark" ? "Grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            })}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={upclick}
        >
          Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={lowclick}
        >
          Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={cleartext}
        >
          Clear
        </button>
        <button type="button" className="btn btn-primary mx-2" onClick={bold}>
          Bold
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handlecopy}
        >
          copy
        </button>
        <button type="button" className="btn btn-primary mx-2" onClick={mode}>
          {btntext}
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={spaceremove}
        >
          remove spaces
        </button>
      </div>
      <div
        className="container my-6"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words and{" "}
          {text.length - text.split(" ").length + 1} characters
        </p>
        <hr />
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <hr />
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the above textbox to preview it here"}
        </p>
        <hr />
      </div>
    </>
  );
}
