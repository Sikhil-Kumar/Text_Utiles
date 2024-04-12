import React,{useState}from 'react'

export default function Textform(props) {

  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upper case", "success");
  }


  const handleloClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lower case", "success");
  }

  const handleCopy = ()=>{
   
    var text = document.getElementById('myBox');
    text.select();
  text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text Copied", "success");
  document.getSelection().removeAllRanges();
  }


  const handleClear= ()=>{
    console.log("Uppercase was clicked" + text);
    let newText='';
    setText(newText)
    props.showAlert("Cleared Text", "success");
  }

  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value)
  }

   const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Spaces Removed", "success");
   }

  const [text, setText] = useState('');
  return (
    <>

  
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleOnChange} id='myBox' rows="8" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743'}}></textarea>
</div>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Change to Uppercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleloClick}>Change to LowerText</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClear}>Clear Text</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>Remove spaces</button>
    </div>
    <div className='container my-3'  style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        {/* <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} disabled={text.length===0} characters</p> */}
        <p>
  {text.split(/\s+/).filter(element => element.length !== 0).length} words and {text.length} characters
</p>

        <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
