import React, {useState} from "react";

function Room(props) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) =>{
    if (message) {
      fetch('/api/task2', {
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
      .catch((error) => {
        console.error(error);
      });
    }
  };
  return (
    <div>
      <input className="input-msg" type="text" onChange={(e)=>
      {e.preventDefault(); setMessage(e.target.value)}} />
      <button className="closebutton" onClick={()=>props.location.state.setChat(false)}>Submit</button>
    </div>
  );
}

export default Task2;