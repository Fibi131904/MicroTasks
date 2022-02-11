import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FullInput from './components/FullInput';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { isPropertySignature } from 'typescript';

function App() {
  let [message, setMessage] = useState([
    { message: 'message1' },
    { message: 'message2' },
    { message: 'message3' },
  ])


  let [title, setTitle] = useState('')



  const addMessage = (title: string) => {
    let newMessage = { message: title };
    setMessage([newMessage, ...message])
  }
  const callBackButtonHandler = () => {
    addMessage(title)
    setTitle('')
  }


  return (
    <div>
      <Input setTitle={setTitle} title={title}/>
      <Button name={'+'} callBack={callBackButtonHandler} />

      {/* <FullInput addMessage={addMessage}/>    */}
         { message.map((el, index) => {
      return (
      <div key={index}>{el.message}</div>
      )
})}
</div>
  )
}

export default App;
