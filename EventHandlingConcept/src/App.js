import logo from './logo.svg';
import weblogo from './images/pngtree-business-logo-design-png-image_915991.jpg';
import './App.css';
import Header from './Header';
import { Button, Container, Alert } from 'react-bootstrap';
import { useState } from 'react';

function App() {

  let [count, setCount] = useState(1);
  let [pshow, setPshow] = useState(false);
  let template = "";
  if(pshow) {
    template = 
    <>
      <Button variant='primary' onClick={() => setPshow(!pshow)} >Hide</Button>
      <p>Hello to React JS Learning</p>
    </>
  } else {
    template = <Button variant='success' onClick={() => setPshow(!pshow)}>Show</Button>;
  }

let [cardComponentShow, setcardComponentShow] = useState(true)
let card = ''
if(cardComponentShow) {
  card = <Card/>
} else {
  card = ''
}

  let displayData=() => {
    setCount(count + 1)
      alert("Welcome to React")
    }
  let appData = (a, b) => {
    console.log(a + b);
  }
  return (
    <div className="App">
      {template}
      {card}
      
      <div>
        <p>Hello to React JS Learning</p>
        {count}
        
      </div>
      
      <img src='https://png.pngtree.com/png-clipart/20190604/original/pngtree-business-logo-design-png-image_915991.jpg' width={250}/>
      <img src={weblogo} width={250}/>
      <Header/>
      <h1>Hello World</h1>
      <Container className="p-3">
        <Alert variant="primary">Welcome to React Bootstrap!</Alert>
        <Button variant="success" className='me-2' onClick={displayData}>Click Me</Button>
        <Button variant='primary'  onClick={() => appData(30, 59)}>Button</Button>
      </Container>
    </div>
  );
}

export default App;

let Card = () => {
  return (
    <>
      <h1>
        Welcome to Card Component
      </h1>
    </>
  )
}