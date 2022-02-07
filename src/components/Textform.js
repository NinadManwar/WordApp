import React,{useState} from 'react';


export default function Textform() {
    const [text, setText] = useState("Type here");

    const toUppercase=()=>{

        let newText = text.toUpperCase();
        setText(newText)
        

    }
    const toReverse=()=>{

        let newText = text.split("").reverse().join("");
        setText(newText)
        

    }
    const toLowercase=()=>{

        let newText = text.toLowerCase();
        setText(newText)
        

    }
    const clearClick =()=>{

        let newText = "";
        setText(newText)
        

    }
    const removeSpaces =()=>{

        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        

    }
    const toCopy =()=>{

        let new1Text = document.getElementById("textBox");
        new1Text.select();
        navigator.clipboard.writeText(new1Text.value);
        // console.log(new1Text);
        // setText(newText)
        

    }
    const toChange=(event)=>{
         
        
        setText(event.target.value)

    }
    return <div>
        <div className="bg-success p-2 text-dark bg-opacity-25">
            <h1>Write your text here:</h1>
        </div>
        
        <div className="container-fluid bg-success p-2 text-light bg-opacity-25">
            <div className="container">
                <label htmlFor="textBox" className="form-label"></label>
                <textarea className="form-control" value={text} placeholder='put here' onChange={toChange} id="textBox" rows="10"></textarea>

            </div>
            <div className='container my-3 '>
            <button type="button" onClick={toUppercase} className="btn btn-dark">Change to UpperCase</button>
            <button type="button" onClick={toLowercase} className="btn btn-dark mx-2">Change to LowerCase</button>
            <button type="button" onClick={toReverse} className="btn btn-dark mx-2">Reverse Text</button>
            <button type="button" onClick={removeSpaces} className="btn btn-dark mx-2">Remove Space </button>
            <button type="button" onClick={clearClick} className="btn btn-dark mx-2">Reset </button>
            <button type="button" onClick={toCopy} className="btn btn-dark mx-2">Copy </button>
         
            </div>
        </div>
        
    </div>;
}
