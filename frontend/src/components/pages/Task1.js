import Container from "./Container";
import React, {useState} from "react";

function Task1() {
  console.log('Called');
  const [selected_text, setText] = useState('');
  const [text_selected, setSelected] = useState(false);

  const onSelected = () => {
    const text = window.getSelection().toString();
    if(text){
      setSelected(true);
      setText(text);
    }
  };

  return(
    <div className="App">
      <div onMouseUp={onSelected}>
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent rutrum nulla eget massa fermentum sodales.
          Maecenas luctus felis massa, sit amet molestie ligula varius ut.
          Vestibulum mattis nunc augue. Phasellus cursus at ex quis facilisis.
          Ut placerat nec ante quis pulvinar. Ut lacinia eleifend purus a lobortis.
          Cras interdum a enim quis finibus.
        </p>
        <p>Nam vehicula consectetur tellus at posuere.
          Aenean faucibus libero vitae iaculis faucibus.
          Nullam est est, viverra id egestas tincidunt, semper sodales felis.
          Nam mollis pretium felis, quis venenatis erat tincidunt in.
          Praesent ut tristique tellus. Phasellus vitae aliquet elit, vitae rutrum libero.
          Duis ut leo malesuada, bibendum massa vel, volutpat metus.
          Praesent nibh ligula, elementum vitae velit in, eleifend interdum erat.
          Cras eget scelerisque urna, sit amet varius nisl. Sed sed elit tellus.
          In efficitur efficitur vehicula. Fusce elit neque, ultricies id leo vel, dictum tempus nisi.
        </p>
      </div>
      {text_selected ? <Container selected_text={selected_text} setSelected={setSelected} /> : null}
    </div>
  );
}
export default Task1;