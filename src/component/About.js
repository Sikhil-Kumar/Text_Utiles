import React from 'react'

export default function About(props) {

// const [myStyle , setMyStyle]=useState({
//     color:'black',
//     backgroundColor:'white'

// })                                                                                             

let myStyle ={
  color: props.mode === 'dark' ? 'white' : '#042743',
  backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
  
};

// const [btntext, setBtnText]=useState("Enable Dark Mode")



 

  return (
    <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743'}}>
    <h1 className='my-3'> About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze Your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
      Textutiles gives you a way to analyze your text quickly and efficiently. Be it word count , Character count or  
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to Use 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ultricies justo. Nam ac nunc at sem varius vehicula. Duis sit amet hendrerit justo. Integer mattis lacus vitae odio lobortis, sed feugiat nunc semper. Proin sit amet odio quis nisi eleifend dapibus. Nullam auctor ligula nec sapien.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compataible
          </button>
          </h2>
       <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
       <div className="accordion-body"style={myStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
       </div>
       </div>
      </div>
     </div>
     {/* <div className='container my-3'>
     <button className='btn btn-primary' type='button' onClick={toggleStyle}> Enable darkMode</button>

    </div> */}
    </div>
    
  )
}
