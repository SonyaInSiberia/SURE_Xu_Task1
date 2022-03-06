import React, {useState} from "react";
import "./Popup.css"
function Container(props){
  const [input, setInput] = useState('');

  const handleClose = () => {
    setInput('');
    props.setSelected(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/task1/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': csrftoken,
        "Accept": "application/json",
        'Content-Type': 'application/json'
      },
      mode: 'same-origin',
      body: JSON.stringify({
        selected_text: props.selected_text,
        annotation: input,
      })
    })
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .catch((error) => { console.error(error); });
    handleClose();
  }

  return (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-button' onClick={handleClose}>Close</button>
        <p>Your Annotation</p>
        <input className='annotation-input' onChange={(e)=>
        {e.preventDefault(); setInput(e.target.value);}} />
        <button className='submit-button' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
export default Container;